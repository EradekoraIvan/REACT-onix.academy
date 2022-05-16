import React from "react";
import style from './addPersonForm.module.css';

class AddPersonForm extends React.Component {

    state = {
        personName: '',
        personBiography: '',
        clickCreateInput: false,
        keyDatesArrey: [],
        year_of_birth: '',
        year_of_death: '',
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
        const keyDatesArrey = [...this.state.keyDatesArrey];
        keyDatesArrey.key_date = e.target.value;

        this.setState({
            keyDatesArrey: keyDatesArrey
        });
        console.log(this.state.keyDatesArrey)
    }




    hendleEvent = (e, pos) => {
        const Event = [...this.state.keyDatesArrey];
        Event.event = e.target.value;

        this.setState({
            keyDatesArrey: Event
        });
        console.log(this.state.keyDatesArrey)
    }

    createInput = () => {
        console.log('я пытаюсь создать инпуты')
        const keyDate = {
            id: this.state.keyDatesArrey.length + 1,
            key_date: '',
            event: '',
        }

        const keyDatesArrey = [...this.state.keyDatesArrey];
        keyDatesArrey.push(keyDate)

        console.log('вижу массив')
        this.setState({
            keyDatesArrey: keyDatesArrey,
            clickCreateInput: true
        })
    }



    createBiography = () => {
        const biographiObg = {
            id: this.props.arrey.length + 1,
            image: `${''}`,
            person_name: this.state.personName,
            years_of_life:
            {
                year_of_birth: this.state.year_of_birth,
                year_of_death: this.state.year_of_death,
            },

            key_dates: [
                {
                    id: 1,
                    date: '',
                    event: ''
                },

                {
                    id: 2,
                    date: '',
                    event: ''
                },
            ],

            biography: this.state.personBiography,
        }

        this.props.addNewBiography(biographiObg)

        this.props.hideForm()
    }



    render() {

        const addInput = this.state.keyDatesArrey.map((item, pos) => {
            return (
                <div key={item.id}>
                    <p>Дата</p>
                    <input

                        type="text"
                        name="key_date"
                        value={this.state.keyDatesArrey.key_date || ''}
                        onChange={this.hendleKeyDate}
                    />
                    <p>Событие</p>
                    <input

                        type="text"
                        name="event"
                        value={this.state.keyDatesArrey.event || ''}
                        onChange={this.hendleEvent}
                    />
                </div>
            )
        })

        return (
            <>
                <form className={style.form_containrt} action="">
                    <h2>Внеси даные</h2>
                    <input
                        className={style.input}
                        type="text"
                        name="person_name"
                        id=""
                        placeholder="name"
                        value={this.state.personName}
                        onChange={this.handlePersonName}
                    />
                    <input
                        type="date"
                        name="year_of_birth"
                        id=""
                        value={this.state.year_of_birth}
                        onChange={this.handleYearBirth}
                    />
                    <input
                        type="date"
                        name="year_of_death"
                        id=""
                        value={this.state.year_of_death}
                        onChange={this.handelYearDeath}
                    />

                    {this.state.clickCreateInput ? addInput : null}

                    <button type="button" className={style.add_btn} onClick={this.createInput}>Добавить ключевую дату</button>

                    <textarea
                        className={style.input}
                        name="biography"
                        id="" rows="10"
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