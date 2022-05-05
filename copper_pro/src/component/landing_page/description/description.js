import React from 'react';
import './description.css';

class Description extends React.Component{
    render() {
        return (
            <div className="description">
            <section>
                <h2>Интернет магазин медной посуды</h2>
                <p>Автор: Новиков Иван</p>
                <p><a href="https://github.com/EradekoraIvan/REACT-onix.academy" target="_blank">Ссылка на Github</a>
                </p>
                <p><a href="https://www.figma.com/file/d8EuHOVVRQFLq9Sj3XOxbP/COPPER-(Copy)?node-id=0%3A1"
                        target="_blank">Оригинал макета</a></p>
                <p>По флажку <a href="profile/profile.html" className="a-img"></a> можно перейти на страницу личного
                    кабинета.
                </p>
            </section>
        </div>
        )
    }
} 
export default Description;