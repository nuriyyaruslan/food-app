import React, { useState, useEffect, useContext } from 'react'
import './HomePage.scss'
import { myContext } from '../context/context';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {fetchHomePageMeals, meals} = useContext(myContext);

    useEffect(() => {
       fetchHomePageMeals(searchTerm);
    }, [searchTerm, fetchHomePageMeals])

    return (
        <div className="home">
            <div className="home-search">
                <input
                    type="text"
                    placeholder="Type a meal name..."
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}    
                />
                <button>Search</button>
            </div>
            <div className="home-meals">
                {meals?.length > 0 ? (
                    meals.map(meal => (
                        <div className="home-grid" key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt="" />
                            <h2>{meal.strMeal}</h2>
                        </div>
                    ))
                ) : (
                    <h1>No meals found! Try another word</h1>
                )}
            </div>
        </div>
    )
}
export default HomePage;