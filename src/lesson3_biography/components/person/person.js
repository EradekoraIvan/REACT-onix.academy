import React from "react";
import style from './person.module.css';




class Person extends React.Component {
    render() {
        return (
            <>
                <div className={style.person}>
                    <div className={style.profile}>
                        <img className={style.profil_img} src={this.props.img} alt="" />
                        <p className={style.profil_name}>{this.props.name}</p>
                        <p className={style.years_of_life}>{this.props.year_of_birth} - {this.props.year_of_death}</p>
                    </div>
                    <div className={style.biography}>
                        <button className={style.person_btn} onClick={this.props.remov} >Удалить</button>
                        <div className={style.key_dates}>
                            <h2 className={style.h2}>Ключевые события</h2>
                            {this.props.key_dates.map(item => <p key={item.id}> {item.key_date} - {item.event} </p>)}
                        </div>
                        <div className={style.h2_p}>
                            <h2 className={style.h2}>Биография</h2>
                            <p className={style.p_biography}>{this.props.details}</p>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        )
    }
}
export default Person; 