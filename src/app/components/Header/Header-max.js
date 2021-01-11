import React from "react";

class Header extends React.Component {
    render() {
        return (
            <hgroup id="header" className="header-max">
                <h1 className="title">{ this.props.title }</h1>

                <hr className="wrapper"/>

                <section className="contacts">
                    <h2 className="description">
                        Новый и Б/У металлопрокат<br/>
                        Продажа металлопроката по лучшим ценам<br/>
                        Актуальные цены узнавайте у менеджера по телефону
                    </h2>
                    <ul className="phones">
                        {
                            this.props.phones.map(
                                function(item) {
                                    let tel = "tel:" + item.replace(/[-() ]/g,"");
                                    return <li key={ item }><a href={tel}><h2>{ item }</h2></a></li>
                                }
                            )
                        }
                    </ul>
                    <h2 className="adress">Адрес металлобазы в Киеве:<br/>г. Киев, пр. Освободителей, 5 (р-н метро "Дарница", парк "Победы")</h2>
                </section>

                <h2 className="delivery">Доставка по Киеву и области</h2>
            </hgroup>
        );
    }
}

export default Header;