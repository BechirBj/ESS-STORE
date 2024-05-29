import React from 'react';
import './navbar.css';
import logo from '../../Assets/Nouveau dossier/Logo_store.jpg';
import search from '../../Assets/navbar/search.png';
import panier from '../../Assets/navbar/panier.png';
import profile from '../../Assets/navbar/profile.png';
import Home from '../../Assets/navbar/homekit.jpg';
import Away from '../../Assets/navbar/awaykit.jpg';
import Third from '../../Assets/navbar/thirdkit.jpg';
import GoalKeeper from '../../Assets/navbar/goalkeeper.jpg';

const Navbar = () => {
  const playerNames = [
    "Ali Jemal",
    "Raed Gazzeh",
    "Hamza Jelassi",
    "Zied Boughattas",
    "Salaheddine Ghedamsi",
    "Ghofrane Naouali",
    "Houssem Ben Ali",
    "Fradj Ben Njima",
    "Jacques Mbé",
    "Soumaila Sidibe",
    "Mohamed Amine Ben Amor",
    "Mohamed Amine Jebali",
    "Salah Barhoumi",
    "Assil Jaziri",
    "Yassine Chikhaoui",
    "Louay Ben Hassine",
    "Raki Aouani",
    "Mohamed Hedi Jertila",
  ];
  return (
    <div>
      <div className="bg-gradient-primary-secondary text-white p-3 text-center">
        <p>
          Sign up to become an ETOILISTE and get 15% off your first purchase
          <span>
            <a href="#" className="underline m-10 text-black">Sign up</a>
          </span>
        </p>
      </div>

      <header className="text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-28 h-28">
              <a href="">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>

          <form class="max-w-5xl mx-auto">   
              <label for="default-search" class="mb-2 text-sm font-medium  sr-only dark:text-white">Search</label>
              <div class="relative w-96">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img src={search} alt=""  />
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-red-600 dark:placeholder-red-400 dark:text-black 0 dark:focus:border-red-500" placeholder="Search" required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
              </div>
          </form>

          <div className="flex items-center">
            <button className="text-black hover:text-gray-200 px-4 py-2 text-sm font-medium">
              EN-EUR
            </button>
            <button className="text-black hover:text-gray-200 px-4 py-2 text-sm font-medium">
              <img src={panier} alt="Panier" className="w-10 h-10" />
            </button>
            <button className="text-black hover:text-gray-200 px-4 py-2 text-sm font-medium">
              <img src={profile} alt="Profile" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Kits
              </a>
              <div className="absolute  h-max w-max bg-white rounded-md shadow-lg z-10 hidden  group-hover:flex gap-5 p-3 ">
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Home} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Home Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Womens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Youth</a></li>
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shop All</a></li>

                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Away} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                  Away Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Womens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Youth</a></li>
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shop All</a></li>

                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1 ">               
                  <img src={Third} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Third Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Womens</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Youth</a></li>
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shop All</a></li>

                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={GoalKeeper} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    GoalKeeper Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div>                
            </div>
            </div>   


            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Shop By Player
              </a>
              <div className="absolute  h-max w-max bg-white rounded-md shadow-lg z-10 hidden  group-hover:flex gap-5 p-3 ">
              <div className="w-full h-full flex flex-col gap-1">
                <h2 className="text-xl font-bold mb-2">Mens Team</h2>
                <ul className="list-none p-0">
                  {playerNames.map((name, index) => (
                    <a> 
                      <button className='align-middle select-none font-sans transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:text-deep-purple-700 hover:bg-deep-purple-300 active:bg-gray-900/20 border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-600 px-4 py-2'>
                        <li key={index} className="text-base leading-normal">{name}</li>
                      </button>
                    </a>
                  ))}
                </ul>
              </div>
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Away} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                  Away Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1 ">               
                  <img src={Third} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Third Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={GoalKeeper} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    GoalKeeper Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                
                
            </div>
            </div>          
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Training
              </a>
              <div className="absolute  h-max w-max bg-white rounded-md shadow-lg z-10 hidden  group-hover:flex gap-5 p-3 ">
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Home} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Home Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Away} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                  Away Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1 ">               
                  <img src={Third} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Third Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={GoalKeeper} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    GoalKeeper Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
            </div>
            </div>          
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Fashion
              </a>
              <div className="absolute  h-max w-max bg-white rounded-md shadow-lg z-10 hidden  group-hover:flex gap-5 p-3 ">
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Home} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Home Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Away} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                  Away Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1 ">               
                  <img src={Third} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Third Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={GoalKeeper} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    GoalKeeper Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                
                
            </div>
            </div>          
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Accessories
              </a>
              <div className="absolute  h-max w-max bg-white rounded-md shadow-lg z-10 hidden  group-hover:flex gap-5 p-3 ">
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Home} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Home Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={Away} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                  Away Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1 ">               
                  <img src={Third} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    Third Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                <div className="w-full h-full flex flex-col gap-1">               
                  <img src={GoalKeeper} alt="Home Kit" className="w-44 h-44 rounded-3xl" />
                  <h2 className='font-bold '>
                    GoalKeeper Kit 23/24
                  </h2>
                  <ul>                                
                    <li> <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mens</a></li>
                  </ul>
                </div> 
                
                
            </div>
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
