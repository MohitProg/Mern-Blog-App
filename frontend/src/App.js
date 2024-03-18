
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Singlepage from './components/Singlepage';
import Dashboard from './Pages/Dashboard';
import Addblog from './Pages/Addblog';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth/Auth';
import Context from './Context/Context';
import Profile from './Pages/Profile';
import Updateform from './Pages/Updateform';
import Error from './Pages/Error';

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/category' element={<Category />} />
            <Route path='/service' element={<Service />} />
            <Route path='/signin' element={<Login />} />

            <Route path='/signup' element={<Signup />} />
            <Route path='/singlepage/:id' element={<Singlepage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/update/:id' element={<Updateform />} />
            <Route path='/profile' element={<Profile />} />
            <Route element={<Auth />}>

              <Route path='/addblog' element={<Addblog />}  />
            </Route>
            <Route path='*' element={<Error />}  />
          </Routes>
          <Footer />

          <ToastContainer autoClose={2000} closeOnClick draggable className="text-sm w-5" />
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
