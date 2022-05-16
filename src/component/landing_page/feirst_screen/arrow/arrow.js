import React from "react";
import './arrow.css';

class Arrow extends React.Component {
    render() {
        return (
            <>
                <svg className="arrow-left-3" viewBox="0 0 9 9">
                    <path
                        d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z">
                    </path>
                </svg>
                <svg className="arrow-right-3" viewBox="0 0 9 9">
                    <path
                        d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z">
                    </path>
                </svg>
            </>
        )
    }
}

export default Arrow;