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
import Comunicados from './pages/Comunicados';

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
                            <Route path="emails" index element={<EmailTodos/>} />
                            <Route path="emails/:id" element={<Email/>}/>  
                            <Route path="servicio-social" element={<ServicioSocial/>} />
                            <Route path="servicio-social/:id" element={<Email/>}/>
                            <Route path="residencia" element={<Residencia/>} />
                            <Route path="residencia/:id" element={<Email/>}/>
                            <Route path="egresados" element={<Egresados/>} />
                            <Route path="egresados/:id" element={<Email/>}/>      
                            <Route path="comunicados" element={<Comunicados/>} />
                            <Route path="comunicados/:id" element={<Email/>}/>      
                    </Route>
                </Routes>
            </EmailProvider> 

        </AuthProvider>
            
     
    </BrowserRouter> 
  )
}

export default App



