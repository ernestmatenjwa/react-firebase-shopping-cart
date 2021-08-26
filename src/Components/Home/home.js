import React from "react";
import '../../Components/Home/home.css';
import Car from '../../Components/car'
import Nav from '../Navbar'
import Products from '../Products'
import Logo from '../../images/logo.jpg'

const Home = () => {

   return(
    <>   
    <header>
       <div class="wrapper">
        <div class="logo">
            <img src={Logo} alt=""/>
        </div>
           <ul class="nav-area">
          <li><a href="/">Home</a></li>
         <li><a href="/">About</a></li>
         <li><a href="/">Services</a></li>
         <li><a href="/login">Login</a></li>
         <li><a href="/signup">Create account</a></li>
         </ul>
</div>
<div class="welcome-text">
        <h1>
welcome to our<span>online store</span></h1>
<a href="/login">Click to start shopping</a>
    </div>
</header>
    </>
   )
}
export default Home;