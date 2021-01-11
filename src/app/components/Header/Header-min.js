import React from "react";

class Header extends React.Component {
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
            <hgroup className="header-min" style={this.display()}>
                <h1 className="title">{ this.props.title }</h1>

                <ul className="phones">
                    {
                        this.props.phones.map(
                            function(item) {
                                let tel = "tel:" + item.replace(/[-() ]/g,"");
                                return <li key={ item }><a href={tel}>{ item }</a></li>
                            }
                        )
                    }
                </ul>
            </hgroup>
        );
    }
}

export default Header;