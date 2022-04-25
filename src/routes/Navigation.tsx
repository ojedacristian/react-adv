import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg'


export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>

      <nav>
        <img src={logo}/>
        <ul>
          <li>
            <NavLink to='/home' className={ ({ isActive }) => isActive ? 'nav-active' : ''} >Home</NavLink>
          </li>
          <li>
            <NavLink to='/shopping' className={ ({ isActive }) => isActive ? 'nav-active' : ''} >Shopping</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={ ({ isActive }) => isActive ? 'nav-active' : ''} >Contact</NavLink>
          </li>
        </ul>
      </nav>

        <Routes>
          <Route path='home' element={<h1>Home page</h1>}/>
          <Route path='shopping' element={ <ShoppingPage/> }/>
          <Route path='contact' element={<h1>Contact page</h1>}/>
          <Route path='/*' element={ <Navigate to='/home' replace/> }  />
        </Routes>

      </div>
      </BrowserRouter>
  )
}
