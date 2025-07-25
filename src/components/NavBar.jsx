import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { userDataContext } from '../context/UserContext';
import About from './About';


function NavBar() {
  const info = useContext(userDataContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" aria-current="page"
                >Home
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/counter" aria-current="page"
                >Counter
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/new-counter" aria-current="page"
                >New Counter
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/memo" aria-current="page"
                >Memo
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Dropdown</a
                >
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownId"
                >
                  <a className="dropdown-item" href="http://localhost:3000/register"
                  >Register</a
                  >
                  <a className="dropdown-item" href="http://localhost:3000/user"
                  >User</a
                  >
                </div>
              </li>
            </ul>
            <NavLink to="/user">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              {info.firstName + " " + info.lastName}
            </NavLink>
            <NavLink to='/register'>
              Register
            </NavLink>
            {/* &nbsp;&nbsp; */}
            <NavLink to='/login'>
              Log In
            </NavLink>

            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      <About />

    </>
  )
}

export default NavBar;