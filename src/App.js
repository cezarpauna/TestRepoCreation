import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Welcome to our Local Coffee Shop</h1>
            <p>We serve the best coffee in town!</p>
            <h2>Our Menu</h2>
            <ul>
                <li>Espresso</li>
                <li>Latte</li>
                <li>Cappuccino</li>
                <li>Cold Brew</li>
                <li>Pastries</li>
            </ul>
        </div>
    );
};

export default App;