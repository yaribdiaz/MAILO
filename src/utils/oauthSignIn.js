import axios from "axios";
import { Navigate } from "react-router-dom";

var YOUR_CLIENT_ID = '678979901209-v7dav4f46hd9rlmv865fokc08lmvf2fr.apps.googleusercontent.com';
var YOUR_REDIRECT_URI = 'http://localhost:5173/mailo';
var fragmentString = location.hash.substring(1);

  // Parse query string to see if page request is coming from OAuth 2.0 server.
  var params = {};
  var regex = /([^&=]+)=([^&]*)/g, m;
  while (m = regex.exec(fragmentString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  if (Object.keys(params).length > 0) {
    localStorage.setItem('oauth2', JSON.stringify(params) );
    if (params['state'] && params['state'] == 'try_sample_request') {
      trySampleRequest();
    }
  }

  // If there's an access token, try an API request.
  // Otherwise, start OAuth 2.0 flow.
  function  trySampleRequest () {
    var params = JSON.parse(localStorage.getItem('oauth2'));
    if (params && params['access_token']) {
       var xhr =  new XMLHttpRequest();
      xhr.open('GET',
          'https://www.googleapis.com/oauth2/v1/userinfo?' +
          'access_token=' + params['access_token']);

      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('trySampleRequest ejecutandose');
        } else if (xhr.readyState === 4 && xhr.status === 401) {
          // Token invalid, so prompt for user permission.
          oauth2SignIn();
        }
      };
      xhr.send(null);
    } else {
      oauth2SignIn();
    }
  }

  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
  function oauth2SignIn() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': '678979901209-v7dav4f46hd9rlmv865fokc08lmvf2fr.apps.googleusercontent.com',
                  'redirect_uri': 'https://mailo.netlify.app/',
                  'scope': 'https://mail.google.com/',
                  'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                  'scope': 'https://accounts.google.com/',
                  'scope': 'https://mail.google.com/mail/feed/atom',
                  'state': 'try_sample_request',
                  'include_granted_scopes': 'true',
                  'response_type': 'token'};

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }




export {oauth2SignIn ,trySampleRequest}

