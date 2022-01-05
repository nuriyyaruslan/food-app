import React,{ useEffect, useContext} from 'react'
import './RandomMeal.scss'
import { myContext } from '../context/context'


const RandomMeal = () => {

    const { fetchRandomMeal,randomMeal } = useContext(myContext);

    useEffect(() => {
       fetchRandomMeal();
    }, [fetchRandomMeal])

    return (
        <div className="random">
            {randomMeal.map(meal => (
                <div key={meal.idMeal} className="random-grid">
                    <div className="random-grid-controls">
                        <img src={meal.strMealThumb} alt="#" />
                        <button className="random-btn" onClick={fetchRandomMeal}>Generate Another Meal</button>
                    </div>
                    <div className="random-grid-instructions">
                        <h1>Instructions</h1>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RandomMeal