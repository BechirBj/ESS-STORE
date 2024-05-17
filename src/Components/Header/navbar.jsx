import React from 'react';
import './navbar.css';
import logo from '../../Assets/Nouveau dossier/Logo_store.jpg'
import search from '../../Assets/navbar/search.png';
import panier from '../../Assets/navbar/panier.png';
import profile from '../../Assets/navbar/profile.png';

const Navbar = () => {
  return (
    <div>
        <div class="bg-gradient-primary-secondary text-white p-3 text-center">
          <p>
          Sign up to become an ETOILISTE and get 15% off your first purchase
          <span>
            <a href="" class="underline m-10 text-black">Sign up</a>
          </span>
        </p>
      </div>

      <div>
      <header className=" text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-28 h-28">
              <img src={logo} alt=""  />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 sm:w-64 px-3 py-2 text-gray-900 rounded-l-full focus:outline-none focus:border-red-600 border-2 border-gray-300"
            />
            <button className="bg-white hover:bg-gray-200 text-blue-900 px-4 py-2 rounded-r-full">
              <img src={search} alt="Search Icon" className="h-5 w-5" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center">
            <button className="text-white hover:text-gray-200 px-4 py-2 text-sm font-medium">
              EN-EUR 
            </button>
            <button className="text-white hover:text-gray-200 px-4 py-2 text-sm font-medium">
            <img src={panier} alt="Panier"  class='w-10 h-10'/>
            </button>
            <button className="text-white hover:text-gray-200 px-4 py-2 text-sm font-medium">
            <img src={profile} alt="Profile" class='w-10 h-10'/>
            </button>
          </div>
        </div>
      </header>

      {/* Tabs for Categories */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Kits</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Shop By Player</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Training</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Fashion</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Champions League</a>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default Navbar;
