import React from "react";
import style from './Edit.Person.module.css';
import update from 'immutability-helper';

class EditPersonForm extends React.Component {

    state = {
        id: this.props.selectBiography.id,
        image: this.props.selectBiography.image,
        personName: this.props.selectBiography.person_name,
        personBiography: this.props.selectBiography.biography,
        editKeyDate: false,
        keyDatesArray: this.props.selectBiography.key_dates,
        year_of_birth: this.props.selectBiography.years_of_life.year_of_birth,
        year_of_death: this.props.selectBiography.years_of_life.year_of_death,
        input_key_date: '',
        input_value: '098765',
    }

    handleYearBirth = e => {
        this.setState({
            year_of_birth: e.target.value
        })
    }

    handelYearDeath = e => {
        this.setState({
            year_of_death: e.target.value
        })
    }

    handlePersonName = e => {
        this.setState({
            personName: e.target.value
        })
    }

    handlePersonBiography = e => {
        this.setState({
            personBiography: e.target.value
        })
    }


    hendleKeyDate = (e, pos) => {
        const temp = [...this.state.keyDatesArray];
        const newTemp = update(temp, {
            [pos]: { key_date: { $set: e.target.value } }
        })

        this.setState({
            input_key_date: e.target.value,
            keyDatesArray: newTemp,

        });
    }

    hendleEvent = (e, pos) => {
        const temp = [...this.state.keyDatesArray];
        const newTemp = update(temp, {
            [pos]: { event: { $set: e.target.value } }
        })

        this.setState({
            input_key_date: e.target.value,
            keyDatesArray: newTemp,

        });
    }

    editKeyDate = () => {
        console.log('редактирую')

        this.setState({
            
            editKeyDate: true
        })
    }



    saveСhanges = () => {
        const temp = [...this.state.keyDatesArray]
        console.log(temp)
        const editedObg = {
            id: this.state.id + 50,
            image: this.state.image,
            person_name: this.state.personName,
            years_of_life:
            {
                year_of_birth: this.state.year_of_birth,
                year_of_death: this.state.year_of_death,
            },
            key_dates: temp,

            biography: this.state.personBiography,
        }

        this.props.applyСhanges(editedObg)

        this.props.hideForm()
    }



    render() {

        const addInput = this.state.keyDatesArray.map((item, pos) => {
            return (
                <div key={item.id}>
                    <p>Дата</p>
                    <input

                        type="text"
                        name="key_date"
                        value={this.state.keyDatesArray[pos].key_date}
                        onChange={(e) => this.hendleKeyDate(e, pos)}
                    />
                    <p>Событие</p>
                    <input

                        type="text"
                        name="event"
                        value={this.state.keyDatesArray[pos].event}
                        onChange={(e) => this.hendleEvent(e, pos)}
                    />
                </div>
            )
        })

        return (
            <>
                <form className={style.form_containrt} action="">
                    <h2>Отредактируйте даные</h2>
                    <label htmlFor="person_name">Полное имя</label>
                    <input
                        className={style.input}
                        type="text"
                        name="person_name"
                        id="person_name"
                        placeholder="name"
                        value={this.state.personName}
                        onChange={this.handlePersonName}
                    />
                    <label htmlFor="year_of_birth">Год рождения</label>
                    <input
                        type='number'
                        name="year_of_birth"
                        id="year_of_birth"
                        value={this.state.year_of_birth}
                        onChange={this.handleYearBirth}
                    />
                    <label htmlFor="year_of_death">Год смерти</label>
                    <input
                        type="number"
                        name="year_of_death"
                        id="year_of_death"
                        value={this.state.year_of_death}
                        onChange={this.handelYearDeath}
                    />

                    {this.state.editKeyDate ? addInput : null}

                    {<button type="button" className={style.add_btn} onClick={this.editKeyDate}>Редактировать ключевые даты</button>}
                    <label htmlFor="biography">Биография</label>
                    <textarea
                        className={style.input}
                        name="biography"
                        id="biography" rows="10"
                        placeholder="biography"
                        value={this.state.personBiography}
                        onChange={this.handlePersonBiography}
                    />
                    <button className={style.add_btn} type='button' onClick={this.saveСhanges}>Сохранить изменения</button>
                </form>
                <div className={style.overley} onClick={this.props.hideForm}></div>
            </>

        )
    }
}

export default EditPersonForm;