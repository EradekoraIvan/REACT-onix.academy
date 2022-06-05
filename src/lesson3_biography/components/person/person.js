import React from "react";
import style from './person.module.css';




class Person extends React.Component {

    render() {

        const hendleEdit = () => {
            this.props.hendelSelectBiography();
            this.props.edit();
        }

        return (
            <>
                <div className={this.props.classNamePerson}
                    onClick={this.props.active}
                    draggable={this.props.draggable}
                    onDragStart= {this.props.onDragStart}
                    onDragLeave= {this.props.onDragLeave}
                    onDragEnd = {this.props.onDragEnd}
                    onDragOver= {this.props.onDragOver}
                    onDrop = {this.props.onDrop}
                    
                    >
                    <div className={style.profile}>
                        <img className={style.profil_img} id='image_person' src={this.props.img} alt="" onLoad={(e)=> this.props.onLoad()} onError={(e)=>this.props.onError()} />
                        <p className={style.profil_name}>{this.props.name}</p>
                        <p className={style.years_of_life}>{this.props.year_of_birth} - {this.props.year_of_death}</p>
                    </div>
                    <div className={style.biography}>
                        <button className={style.person_btn} onClick={this.props.remov} >Удалить</button>
                        <button className={style.person_btn} onClick={hendleEdit} >Редактировать</button>
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