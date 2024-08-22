import React, { useState } from 'react';
import Apple from './apple.webp';
import Pome from './Pomegranate.jpg';
import Strawberry from './strawberries.jpg';
import Mango from './mango.png';
import '../App.css';

function Shoppingmart() {
    // State to keep track of the quantity of each item
    const [counts, setCounts] = useState({
        apple: 0,
        pomegranate: 0,
        strawberry: 0,
        mango: 0
    });

    // Function to handle increment and decrement
    const handleCountChange = (item, change) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [item]: Math.max(0, prevCounts[item] + change) // Ensures count doesn't go below 0
        }));
    };

    return (
        <div className='body'>
            <h1>My Super Market Super Basket</h1>
            <div className='container'>
                <div className='row'>
                    <div className='item'>
                        <img src={Apple} alt='Apple' />
                    </div>
                    <div className='item'>
                        <h3>Apple</h3>
                    </div>
                    <div className='item'>
                        <select>
                            <option>--</option>
                            <option>0.5kg</option>
                            <option>1kg</option>
                            <option>2kg</option>
                            <option>3kg</option>
                            <option>4kg</option>
                            <option>5kg</option>
                        </select>
                    </div>
                    <div className='item'>
                        <h3>1Kg: ₹78</h3>
                    </div>
                    <div className='item'>
                        <div className='button'>
                            <button onClick={() => handleCountChange('apple', -1)}>-</button>
                            <h3>{counts.apple}</h3>
                            <button onClick={() => handleCountChange('apple', 1)}>+</button>
                        </div>
                    </div>
                </div>
                {/* Repeat the same structure for Pomegranate, Strawberry, and Mango */}
                <div className='row'>
                    <div className='item'>
                        <img src={Pome} alt='Pomegranate' />
                    </div>
                    <div className='item'>
                        <h3>Pomegranate</h3>
                    </div>
                    <div className='item'>
                        <select>
                            <option>--</option>
                            <option>0.5kg</option>
                            <option>1kg</option>
                            <option>2kg</option>
                            <option>3kg</option>
                            <option>4kg</option>
                            <option>5kg</option>
                        </select>
                    </div>
                    <div className='item'>
                        <h3>1Kg: ₹78</h3>
                    </div>
                    <div className='item'>
                        <div className='button'>
                            <button onClick={() => handleCountChange('pomegranate', -1)}>-</button>
                            <h3>{counts.pomegranate}</h3>
                            <button onClick={() => handleCountChange('pomegranate', 1)}>+</button>
                        </div>
                    </div>
                </div>
                {/* Repeat for Strawberry and Mango */}
                <div className='row'>
                    <div className='item'>
                        <img src={Strawberry} alt='Strawberry' />
                    </div>
                    <div className='item'>
                        <h3>Strawberry</h3>
                    </div>
                    <div className='item'>
                        <select>
                            <option>--</option>
                            <option>0.5kg</option>
                            <option>1kg</option>
                            <option>2kg</option>
                            <option>3kg</option>
                            <option>4kg</option>
                            <option>5kg</option>
                        </select>
                    </div>
                    <div className='item'>
                        <h3>1Kg: ₹78</h3>
                    </div>
                    <div className='item'>
                        <div className='button'>
                            <button onClick={() => handleCountChange('strawberry', -1)}>-</button>
                            <h3>{counts.strawberry}</h3>
                            <button onClick={() => handleCountChange('strawberry', 1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='item'>
                        <img src={Mango} alt='Mango' />
                    </div>
                    <div className='item'>
                        <h3>Mango</h3>
                    </div>
                    <div className='item'>
                        <select>
                            <option>--</option>
                            <option>0.5kg</option>
                            <option>1kg</option>
                            <option>2kg</option>
                            <option>3kg</option>
                            <option>4kg</option>
                            <option>5kg</option>
                        </select>
                    </div>
                    <div className='item'>
                        <h3>1Kg: ₹78</h3>
                    </div>
                    <div className='item'>
                        <div className='button'>
                            <button onClick={() => handleCountChange('mango', -1)}>-</button>
                            <h3>{counts.mango}</h3>
                            <button onClick={() => handleCountChange('mango', 1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display the counts at the bottom of the page */}
            <div className='summary'>
                <h2>Summary</h2>
                <p>The Apple: {counts.apple}</p>
                <p>The Pomegranate: {counts.pomegranate}</p>
                <p>The Strawberry: {counts.strawberry}</p>
                <p>The Mango: {counts.mango}</p>
            </div>
        </div>
    );
}

export default Shoppingmart;
