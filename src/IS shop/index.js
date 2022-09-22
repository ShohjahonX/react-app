import React from "react";
import img1 from './img/IS shop.jpg';
import img2 from './img/cow meet.png';
import img3 from './img/banana.jpg';
import img4 from './img/nestle milk.png';
import img5 from './img/pepsi.jpg';
import img6 from './img/bread.jpg';
import img7 from './img/yog.png';
import { FaSearch, FaShoppingCart} from "react-icons/fa";
import './main.css';

const ISshop = () => {

    let a = 1;
    const addproduct = () => {
    document.getElementById('add-product').innerHTML = a;
    a++;
    }

    return(
        <div className="wrapper">  
        <nav className="nav-one">
            <div className="isshop-brand">
                <img src={img1} alt="" />
                <h1 translate="no">IS shop</h1>
            </div>
            <div className="isshop-brand">
                <input type="search" placeholder="Enter the request" />  
                <div className="glass">
                <FaSearch />
                </div>          
            </div>
            <div title="My basket"> 
            <div id="add-product"></div>
            <FaShoppingCart className="cart" />
            </div> 
            <div className="isshop-brand" translate="no">
                <h2>EN</h2>
                <h2 className="space-h2">UZ</h2>  
                <h2 className="space-h2">RU</h2>
            </div>
        </nav>
        <div class="categore">
            <h1 title="All">All</h1>
            <h1 title="Fruits">Fruits</h1>
            <h1 title="Vegetables">Vegetables</h1>
            <h1 title="Food">Food</h1>
            <h1 title="Clothes">Clothes</h1>
            <h1 title="Household appliances">Household appliances</h1>
        </div>
        <div class="all-box">
            <div class="cow-meet">
                <div class="flex">
                    <h1>Beef, neck</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img2} alt="" />
                <h1>Cost: <em>72 990</em></h1>
                <button><h2>Buy</h2></button>
            </div>
            <div class="banana">
                <div class="flex">
                    <h1>Banana</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img3} alt="" />
                <h1>Cost: <em>17 450</em></h1>
                <button><h2>Buy</h2></button>
            </div>
            <div class="banana">
                <div class="flex">
                    <h1>Lactel milk 2%</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img4} alt="" height="185px" />
                <h1>Cost: <em>9 990</em></h1>
                <button><h2>Buy</h2></button>
            </div>
        </div>
        <div class="all-box" id="all-box">
            <div class="cow-meet">
                <div class="flex">
                    <h1>Bread</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img6} alt="" />
                <h1>Cost: <em>2 750</em></h1>
                <button><h2>Buy</h2></button>
            </div>
            <div class="banana">
                <div class="flex">
                    <h1>Pepsi, 1.5l</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img5} alt="" height="185px" />
                <h1>Cost: <em>10 850</em></h1>
                <button><h2>Buy</h2></button>
            </div>
            <div class="banana">
                <div class="flex">
                    <h1>Oil "Елена" 1l</h1>
                    <h1 onClick={addproduct} title="Add">+</h1>
                </div>
                <img src={img7} alt="" height="185px" />
                <h1>Cost: <em>19 990</em></h1>
                <button><h2>Buy</h2></button>
            </div>
        </div>
        <div className="reklama">
            
        </div>
        </div> 
    )
}


export default ISshop;