import React from "react";
import style from './News.module.css';
import Header from "../header/header";
import Footer from "../footer/footer";

class NewsView extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Footer />
            </>
        )
    }
}

export default NewsView