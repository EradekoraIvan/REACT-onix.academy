import React from "react";

class Li extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <li>
                <img src={this.props.icon} alt=""/>
                    <h3>{this.props.h}</h3>
                    <p> {this.props.p} </p>
                    <details>
                        <summary>Читать далее</summary>
                        {this.props.details}
                    </details>
            </li>
        )
    }
}

export default Li;