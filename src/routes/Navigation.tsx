import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<h2>Loading</h2>}>
    <BrowserRouter>

      <div className='main-layout'>

      <nav>
        <img src={logo}/>
        <ul>
          {
            routes.map( ({to, name}) => 
            <li key={to}>
              <NavLink to={to} className={ ({ isActive }) => isActive ? 'nav-active' : ''}> { name } </NavLink>
            </li>)
          }
        </ul>
      </nav>

        <Routes>
          {
            routes.map( ({path, Component}) =>
            <Route 
            key={path}
            path={path}
            element={ <Component/> }
            />
            )
          }
          <Route path='/*' element={ <Navigate to={routes[0].to} replace/> }  />
        </Routes>

      </div>
      </BrowserRouter>
          </Suspense>
  )
}