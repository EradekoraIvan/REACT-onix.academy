import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import Biography from "../../lesson3_biography/biography";



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Header style={'header_style'} />
                <div style={{display:'grid', gridTemplateColumns: '1fr 6fr 1fr'}}>
                    <Biography />
                </div>
                <Footer />
                <Link style={{ color: "black" }} to="/"> HOME </Link>
            </>

        )
    }
}

export default Profile;