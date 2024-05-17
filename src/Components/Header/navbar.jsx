import React from 'react';
import './navbar.css'; 
import logo from '../../Assets/Nouveau dossier/Logo_store.jpg'
import search from '../../Assets/navbar/search.png';
import panier from '../../Assets/navbar/panier.png';
import profile from '../../Assets/navbar/profile.png';

const Navbar = () => {
  return (
    <div>
      <div className='header-top'>
        <p>
          Sign up to become an ETOILISTE and get 15% off your first purchase <span> <a href=""> Sign up </a></span>
        </p>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <div className="navigation-bar">
        <header className='relative'>
          <nav className='nav-top'>
            <div className='logo-section'>
              <div>
                <img src={logo} alt="ESS-Store"  />
              </div>
            </div>
            <div className='search-section'>
              <div className='search-box'>      
                <img src={search} alt="Search" />
                <div className="inputGroup">
                  <input type="text" required="" autoComplete="off" />
                  <label htmlFor="name">Search</label>
                </div>
              </div>
            </div>
            <div className='icons-box'>
              <div>
                en-eur
              </div>
              <div className='icons'>
                <button>
                  <img src={profile} alt="Profile" />
                </button>
                <button>
                  <img src={panier} alt="Panier" />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>  
  );
}

export default Navbar;
