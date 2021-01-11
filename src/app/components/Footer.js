import React from "react";
import "../css/footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>г. Киев, { (new Date().getFullYear()) } г.</p>
            </footer>
        );
    }
}

export default Footer;