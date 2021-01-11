import React from "react";
import { Fade } from "react-awesome-reveal";
import "../../css/header.scss";

//Компоненты
import HeaderMin from "./Header-min";
import HeaderMax from "./Header-max";
import ButtonUp from "./ButtonUp";

//Данные
const title = "КИЕВПРОКАТ СМЦ";
const phones = [ "+380 (63) 670-20-30", "+380 (67) 213-30-32", "+380 (68) 985-53-42"]

class Header extends React.Component {
    //Конструктор
    constructor() {
        super();
        this.state = { show: false };
        this.displayBlock = this.displayBlock.bind(this);
        this.click = this.click.bind(this);
    } //constructor

    //Добавление слушателя события скролла
    componentDidMount() {
        window.addEventListener("scroll", this.displayBlock);
    }

    //Удаление слушателя события скролла
    componentWillUnmount() {
        window.removeEventListener("scroll", this.displayBlock);
    }

    //Обработчик события скролла
    displayBlock() {
        let deviceHeight = document.documentElement.clientHeight;

        let display = false;
        if(window.pageYOffset >= (deviceHeight / 2)) {
            display = true;
        } //if

        this.setState({ show: display });
    } //displayBlock

    click() {
        this.setState({ show: !this.state.show })
    }

    //Рендер компонента в DOM
    render() {
        return (
            <header>
                <HeaderMin show={ this.state.show } title={ title } phones={ phones }/>
                <ButtonUp show={ this.state.show }/>

                <Fade when={ !this.state.show }>
                    <HeaderMax title={ title } phones={ phones }/>
                </Fade>
            </header>
        );
    } //render
}

export default Header;