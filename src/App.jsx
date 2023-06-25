
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Nav from './componentes/Nav/Nav'


function App() {


const {pathname} = useLocation()


  return(
    <div className='App'>

      {pathname!=='/' ? <Nav/> :''}
       
       <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Landing  />} />
       </Routes>

    </div>
 );
}

export default App
