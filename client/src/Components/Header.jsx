import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1>Weather Space<span role="img" aria-label={"umbrella"}>☂️</span></h1>
                <span className="annotation">MERN Full Stack Website</span>
            </section>
        );
    }
}

export default Header;