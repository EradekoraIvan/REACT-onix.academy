import React from "react";
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
                <div style={{display:'grid', gridTemplateColumns: '1fr 6fr 1fr'}}>
                    <Biography />
                </div>
            </>

        )
    }
}

export default Profile;