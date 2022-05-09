import React from "react";
import './main.css';
import OurProduction from "./our_production/our_production.js";
import BestSelling from "./best_selling/best_selling.js";
import Novelties from "./novelty/novelties";
import Stock from "./stock/stock";
import Recommend from "./recommend/recommend";
import Discounts from "./discounts/discounts";
import Reviews from "./reviews/reviews";
import WhyChooseUs from "./why_choose_us/why_choose_us";
import Footer from "../../footer/footer";




class Main extends React.Component {
    render() {
        return (
            <main>
                <OurProduction />
                <BestSelling />
                <Novelties />
                <Stock />
                <Discounts />
                <Recommend />
                <Reviews />
                <WhyChooseUs />
                <Footer/>
            </main>
        )
    }
}

export default Main;