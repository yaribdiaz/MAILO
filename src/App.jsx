import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { EmailProvider } from './context/EmailProvider';
import AuthLayout from './layout/AuthLayout';
import Layout from './layout/Layout';
import Login from './pages/Login';
import EmailTodos from './pages/EmailTodos';
import ServicioSocial from './pages/ServicioSocial';
import Residencia from './pages/Residencia';
import Egresados from './pages/Egresados';
import Email from './components/Email';

function App( ) {

    

  return (
    <BrowserRouter>

        <AuthProvider>

            <EmailProvider>

                <Routes>
                    <Route path='/' element={<AuthLayout/>}>
                      <Route index element={<Login/>} />
                    </Route>

                    <Route path='/mailo' element={<Layout/>}>
                            <Route index element={<EmailTodos/>} />
                            <Route path=":id" element={<Email/>}/>
                            <Route path="servicio-social" element={<ServicioSocial/>} />
                            <Route path="residencia" element={<Residencia/>} />
                            <Route path="egresados" element={<Egresados/>} />
                            
                    </Route>
                </Routes>
            </EmailProvider> 

        </AuthProvider>
            
     
    </BrowserRouter> 
  )
}

export default App



