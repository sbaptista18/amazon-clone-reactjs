import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>

            <div class="home__row">
                <Product
                    id="1"
                    title="Product 1"
                    price={10.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg">
                </Product>

                <Product
                    id="2"
                    title="Product 2"
                    price={10.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg">
                </Product>
            </div>

            <div class="home__row">
                <Product
                    id="3"
                    title="Product 3"
                    price={10.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg">
                </Product>

                <Product
                    id="4"
                    title="Product 4"
                    price={10.95}
                    rating={4}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$">
                </Product>

                <Product
                    id="5"
                    title="Product 5"
                    price={10.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg">
                </Product>
            </div>

            <div class="home__row">
                <Product
                    id="6"
                    title="Product 6"
                    price={10.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg">
                </Product>
            </div>
        </div>
    )
}

export default Home
