import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product title={'The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'} image={'https://covers.booktopia.com.au/150/9780307887894/0000/the-lean-startup.jpg'} price = {19.99} rating = {5}/>
                <Product title={'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)'} image={'https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg'} price = {499.99} rating = {4}/>
            </div>
            <div className="home__row">
            <Product title={'Listerine Mouth Wash'} image={'https://images-na.ssl-images-amazon.com/images/I/81vNiROdiIL._SL1500_.jpg'} price = {6.99} rating = {4}/>
            <Product title={'Ultimate Tempered Glass Screen Protector'} image={'https://images-na.ssl-images-amazon.com/images/I/71-a7F4zObL._AC_SL1500_.jpg'} price = {4.99} rating = {3}/>
            <Product title={'Universal Gaming Headphone with Bluetooth and Wireless'} image={'https://images-na.ssl-images-amazon.com/images/I/61JJl260NlL._AC_SL1412_.jpg'} price = {199.99} rating = {4}/>

                
            </div>
            <div className="home__row">
            <Product title={'UG 29WN600-W 29" 21:9 UltraWide WFHD IPS HDR10 Monitor with FreeSync, Silver with Bluetooth and Wireless'} image={'https://images-na.ssl-images-amazon.com/images/I/91WlgTJfawL._AC_SL1500_.jpg'} price = {599.99} rating = {4}/>

            </div>
            </div>

        </div>
    )
}

export default Home
