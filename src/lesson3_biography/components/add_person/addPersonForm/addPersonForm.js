import React from "react";
import style from './addPersonForm.module.css';
import update from 'immutability-helper';

class AddPersonForm extends React.Component {

    state = {
        personName: '',
        personBiography: '',
        clickCreateInput: false,
        keyDatesArray: [],
        year_of_birth: '',
        year_of_death: '',
        input_key_date: '',
        input_value: '',
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
           [pos] : {key_date:{$set:e.target.value}}
        })

        this.setState({
            input_key_date: e.target.value,
            keyDatesArray: newTemp,
            
        });
    }




    hendleEvent = (e, pos) => {
        const temp = [...this.state.keyDatesArray];
        const newTemp = update(temp, {
            [pos] : {event:{$set:e.target.value}}
        })

        this.setState({
            input_key_date: e.target.value,
            keyDatesArray: newTemp,
            
        });
    }

    createInput = () => {
        console.log('я пытаюсь создать инпуты')
        const keyDate = {
            id: this.state.keyDatesArray.length + 1,
            key_date: '',
            event: '',
        }

        const temp = Array.from(this.state.keyDatesArray)

        const keyDatesArray = [...temp];
        keyDatesArray.push(keyDate)

        this.setState({
            keyDatesArray: keyDatesArray,
            clickCreateInput: true
        })
    }



    createBiography = () => {
        const biographiObg = {
            id: this.props.array.length + 1,
            image: `${''}`,
            person_name: this.state.personName,
            years_of_life:
            {
                year_of_birth: this.state.year_of_birth,
                year_of_death: this.state.year_of_death,
            },
            key_dates: this.state.keyDatesArray,

            biography: this.state.personBiography,
        }

        this.props.addNewBiography(biographiObg)

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
                        value={this.state.keyDatesArray.input_key_date}
                        onChange={(e) => this.hendleKeyDate(e, pos)}
                    />
                    <p>Событие</p>
                    <input

                        type="text"
                        name="event"
                        value={this.state.keyDatesArray.input_value}
                        onChange={(e) => this.hendleEvent(e, pos)}
                    />
                </div>
            )
        })

        return (
            <>
                <form className={style.form_containrt} action="">
                    <h2>Внеси даные</h2>
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

                    {this.state.clickCreateInput ? addInput : null}

                    {<button type="button" className={style.add_btn} onClick={this.createInput}>Добавить ключевую дату</button>}
                    <label htmlFor="biography">Биография</label>
                    <textarea
                        className={style.input}
                        name="biography"
                        id="biography" rows="10"
                        placeholder="biography"
                        value={this.state.personBiography}
                        onChange={this.handlePersonBiography}
                    />
                    <button className={style.add_btn} type='button' onClick={this.createBiography}>Добавыть</button>
                </form>
                <div className={style.overley} onClick={this.props.hideForm}></div>
            </>

        )
    }
}

export default AddPersonForm;