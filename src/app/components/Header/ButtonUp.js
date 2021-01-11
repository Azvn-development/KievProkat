import React from "react";
import "../../css/buttonUp.scss";

//Иконки fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

class ButtonUp extends React.Component {
    display() {
        if(this.props.show) {
            return {
                transition: "opacity 1000ms"
            };
        } else return {
            opacity: "0",
            transition: "opacity 1000ms"
        };
    }

    render() {
        return (
            <div className="buttonUp" style={ this.display() }>
                <a href="#header"><FontAwesomeIcon icon={faArrowCircleUp}/></a>
            </div>
        );
    }
}

export default ButtonUp;