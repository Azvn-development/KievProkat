import React from "react";
import "../css/main.scss";
import { Fade } from "react-awesome-reveal";

//Иконки fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCut } from "@fortawesome/free-solid-svg-icons";

//Картинки для каталога
import armature from "../assets/images/catalog/armature.jpg";
import channel from "../assets/images/catalog/channel.jpg";
import circle_of_steal from "../assets/images/catalog/circle_of_steal.jpg";
import corner from "../assets/images/catalog/corner.jpg";
import decking from "../assets/images/catalog/decking.jpg";
import l_beam from "../assets/images/catalog/l_beam.jpg";
import profile_pipe from "../assets/images/catalog/profile_pipe.jpg";
import rolled_sheet from "../assets/images/catalog/rolled_sheet.jpg";
import square_of_steal from "../assets/images/catalog/square_of_steal.jpg";
import steel_wire_rod from "../assets/images/catalog/steel_wire_rod.jpg";
import strip from "../assets/images/catalog/strip.jpg";
import welded_pipe from "../assets/images/catalog/welded_pipe.jpg";

//Картинка карты
import map from "../assets/images/map.jpg";

class Main extends React.Component {
    //Рендер компонента
    render() {
        return (
            <main>
                {/*Каталог продукции*/}
                <section className="catalog info">
                    <Fade cascade>
                        <h2 className="title">Наша продукция</h2>
                        <div className="items">
                            <div className="item">
                                <img alt="Арматура" src={armature} />
                                <h3>Арматура</h3>
                                <p>
                                    Арматура МЕРА, НДЛ, КОРОТЫШ всех видов. У нас вы можете купить арматуру стальную по цене <nobr>от <b>12 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Балка" src={l_beam} />
                                <h3>Балка</h3>
                                <p>
                                    Балка стальная двутавровая всех видов. У нас вы можете купить балку стальную по цене <nobr>от <b>13 000 грн./т</b></nobr>
                                </p>
                            </div>
                            
                            <div className="item">
                                <img alt="Катанка" src={steel_wire_rod} />
                                <h3>Катанка</h3>
                                <p>
                                    Катанка стальная всех видов. У нас вы можете купить катанку стальную по цене <nobr>от <b>12 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Квадрат стальной" src={square_of_steal} />
                                <h3>Квадрат стальной</h3>
                                <p>
                                    Квадрат стальной всех видов. У нас вы можете купить квадрат стальной по цене <nobr>от <b>14 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Круг стальной" src={circle_of_steal} />
                                <h3>Круг стальной</h3>
                                <p>
                                    Круг стальной всех видов. У нас вы можете купить круг стальной по цене <nobr>от <b>14 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Лист стальной" src={rolled_sheet} />
                                <h3>Лист стальной</h3>
                                <p>
                                    Лист стальной всех видов. У нас вы можете купить лист стальной по цене <nobr>от <b>13 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Полоса стальная" src={strip} />
                                <h3>Полоса стальная</h3>
                                <p>
                                    Полоса стальная всех видов. У нас вы можете купить полосу стальную по цене <nobr>от <b>14 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Профнастил" src={decking} />
                                <h3>Профнастил</h3>
                                <p>
                                    Профнастил кровельный, стеновой, несущий всех видов. У нас вы можете купить профнастил по цене <nobr>от <b>64 грн./кв.м</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Профильная труба" src={profile_pipe} />
                                <h3>Профильная труба</h3>
                                <p>
                                    Труба профильная квадратная, прямоугольная всех видов. У нас вы можете купить профильную трубу по цене <nobr>от <b>15 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Труба сварная" src={welded_pipe} />
                                <h3>Труба сварная</h3>
                                <p>
                                    Трубы сварные прямошовные, бесшовные, спиральношовные всех видов. У нас вы можете купить трубы сварные по цене <nobr>от <b>15 000 грн./т</b></nobr>
                                </p>
                            </div>

                            <div className="item">
                                <img alt="Уголок стальной" src={corner} />
                                <h3>Уголок стальной</h3>
                                <p>
                                    Уголок стальной всех видов. У нас вы можете купить уголок стальной по цене <nobr>от <b>14 000 грн./т</b></nobr>
                                </p>
                            </div>
                            
                            <div className="item">
                                <img alt="Швеллер" src={channel} />
                                <h3>Швеллер</h3>
                                <p>
                                    Швеллер стальной всех видов. У нас вы можете купить швеллер стальной по цене <nobr>от <b>15 000 грн./т</b></nobr>
                                </p>
                            </div>
                        </div>
                    </Fade>
                </section>

                {/*Преимущества*/}
                <section className="advantages info">
                    <Fade cascade>
                        <h2 className="title">Наши преимущества</h2>
                        <div className="items">
                            <div className="item">
                                <FontAwesomeIcon icon={faMoneyBill} className="icon"/>
                                <h3>Цена</h3>
                                <p>
                                    У нас наилучшие цены на продукцию, 
                                    благодаря работе с ведущими поставщиками металлопроката
                                </p>
                            </div>

                            <div className="item">
                                <FontAwesomeIcon icon={faCubes} className="icon"/>
                                <h3>Ассортимент</h3>
                                <p>
                                    Мы имеем широкий ассортимент металлопроката как нового так и Б/У, 
                                    позволяющий удовлетворить все Ваши потребности
                                </p>
                            </div>

                            <div className="item">
                                <FontAwesomeIcon icon={faTruck} className="icon"/>
                                <h3>Доставка</h3>
                                <p>
                                    Доставка по Киеву и области.
                                    Мы доставим Вам продукцию по нужному адресу и 
                                    в оговоренные сроки
                                </p>
                            </div>

                            <div className="item">
                                <FontAwesomeIcon icon={faCut} className="icon"/>
                                <h3>Порезка</h3>
                                <p>
                                    Мы предлагаем порезку металлопроката по вашим размерам,
                                    изготовление металлоконструкций
                                </p>
                            </div>
                        </div>
                    </Fade>
                </section>

                {/*График работы*/}
                <section className="shedule info">
                    <Fade cascade>
                        <h2 className="title">Наш график работы</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>ПН</td>
                                    <td>09:00 - 17:00</td>
                                </tr>
                                <tr>
                                    <td>ВТ</td>
                                    <td>09:00 - 17:00</td>
                                </tr>
                                <tr>
                                    <td>СР</td>
                                    <td>09:00 - 17:00</td>
                                </tr>
                                <tr>
                                    <td>ЧТ</td>
                                    <td>09:00 - 17:00</td>
                                </tr>
                                <tr>
                                    <td>ПТ</td>
                                    <td>09:00 - 17:00</td>
                                </tr>
                                <tr>
                                    <td>СБ</td>
                                    <td>выходной</td>
                                </tr>
                                <tr>
                                    <td>ВС</td>
                                    <td>выходной</td>
                                </tr>
                            </tbody>
                        </table>
                    </Fade>
                </section>

                {/*Местоположение*/}
                <section className="location info">
                    <Fade cascade>
                        <h2 className="title">Наш адрес</h2>
                        <div className="map">
                            <img alt="Карта" src={map}/>
                        </div>
                    </Fade>
                </section>
            </main>
        );
    }
}

export default Main;