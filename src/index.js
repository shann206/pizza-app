import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function App() {
    return (
    <div className="container">
        <Header />
        {Menu()}
        <Pizza3 />
        <Pizza4 />
        <Pizza5 />
        <Pizza6 />
    </div>
    ); 
}

function Header() {
    return <h1 style={{color: "orange", fontSize: 48, textTransform: "uppercase"}}>Tan Zhi Shan's Pizza Co.</h1>;
}

function Pizza() {
    return (
    <div>
        <img src="/pizzas/focaccia.jpg" alt="focaccia pizza" width="200" height="200"/>
        <h2>Focaccia</h2>
        <p>Ingredients: focaccia bread, olive oil, salt</p>
    </div>
    );
}

function Pizza2() {
    return (
    <div>
        <img src="/pizzas/funghi.jpg" alt="funghi pizza" width="200" height="200"/>
        <h2>Funghi</h2>
        <p>Ingredients: tomato, mozzarella, mushrooms</p>
    </div>
    );
}

function Pizza3() {
    return (
    <div>
        <img src="/pizzas/margherita.jpg" alt="margherita pizza" width="200" height="200"/>
        <h2>Margherita</h2>
        <p>Ingredients: tomato, mozzarella, fresh basil leaves, olive oil</p>
    </div>
    );
}

function Pizza4() {
    return (
    <div>
        <img src="/pizzas/prosciutto.jpg" alt="prosciutto pizza" width="200" height="200"/>
        <h2>Prosciutto</h2>
        <p>Ingredients: tomato, mozzarella, prosciutto</p>
    </div>
    );
}

function Pizza5() {
    return (
    <div>
        <img src="/pizzas/salamino.jpg" alt="salamino pizza" width="200" height="200"/>
        <h2>Salamino</h2>
        <p>Ingredients: tomato, mozzarella, salami</p>
    </div>
    );
}

function Pizza6() {
    return (
    <div>
        <img src="/pizzas/spinaci.jpg" alt="spinaci pizza" width="200" height="200"/>
        <h2>Spinaci</h2>
        <p>Ingredients: tomato, mozzarella, spinaci</p>
    </div>
    );
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <Pizza />
            <Pizza2 />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
