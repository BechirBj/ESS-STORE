import React, { useState } from 'react';
import allPlayers from '../../Assets/Data/Players/Players'; // Assuming allPlayers is imported correctly
import { Link, useNavigate } from 'react-router-dom';

const ShopPlSection = () => {
    const [filter, setFilter] = useState('All'); 

    const handleFilterChange = (position) => {
        setFilter(position); 
    };

    const filteredPlayers = () => {
        if (filter === 'All') {
            return allPlayers; 
        } else {
            return allPlayers.filter(player => player.position === filter); 
        }
    };
    
    return (
        <div className='p-20'>
            <div className='flex gap-4 justify-center mb-4'>
                <button
                    onClick={() => handleFilterChange('All')}
                    className={`px-4 py-2 rounded-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 ${filter === 'All' ? 'bg-red-800' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilterChange('Goalkeeper')}
                    className={`px-4 py-2 rounded-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 ${filter === 'Goalkeeper' ? 'bg-red-800' : ''}`}
                >
                    Goalkeeper
                </button>
                <button
                    onClick={() => handleFilterChange('Defender')}
                    className={`px-4 py-2 rounded-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 ${filter === 'Defender' ? 'bg-red-800' : ''}`}
                >
                    Defender
                </button>
                <button
                    onClick={() => handleFilterChange('Midfielder')}
                    className={`px-4 py-2 rounded-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 ${filter === 'Midfielder' ? 'bg-red-800' : ''}`}
                >
                    Midfielder
                </button>
                <button
                    onClick={() => handleFilterChange('Forward')}
                    className={`px-4 py-2 rounded-full text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium transition-colors duration-300 ${filter === 'Forward' ? 'bg-red-800' : ''}`}
                >
                    Forward
                </button>
            </div>

            
            <div className="All-games grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPlayers().map((player, index) => (
                    <Link to={`/player/${player.id}`} key={index}>
                    <div key={index} className="mix  border rounded-lg shadow-md text-center">
                        <div className="relative overflow-hidden">
                            <img className="w-full h-64 object-cover rounded-md" src={player.img} alt={player.name} />
                        </div>
                        <div className="mt-4 flex justify-center items-center space-x-2">
                            <span className="text-xl font-bold">{player.jerseyNumber}</span>
                            <span className="text-lg">{player.name}</span>
                        </div>
                    </div>
                    </Link>
                ))}

                </div>            
        </div>
    )
}

export default ShopPlSection;
