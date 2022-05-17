import React from "react";
import style from './biography.module.css';
import Person from './components/person/person.js';
import biography from "./biography_array.js";
import AddPerson from "./components/add_person/AddPerson";
import AddPersonForm from "./components/add_person/addPersonForm/addPersonForm";


class Biography extends React.Component {

    state = {
        arrey: /*JSON.parse(localStorage.getItem('personArrey')) || */ biography,
        showAddPersonForm: false,
    }

    removPerson = pos => {
        if (window.confirm(`Шо прям взять и удалить ${this.state.arrey[pos].person_name}?`)) {
            if (window.confirm('В каждом из нас есть немного Гомера Симпсона.')) {
                const arreyCopy = [...this.state.arrey];
                arreyCopy.splice(pos, 1);
                this.setState({
                    arrey: arreyCopy
                });
            }
        }
        /* localStorage.getItem('personArrey', JSON.stringify(arreyCopy));*/
    }

    showForm = () => {
        this.setState({
            showAddPersonForm: true
        })
    }

    hideForm = () => {
        this.setState({
            showAddPersonForm: false
        })
        console.log('+')
    }

    handleEsc = (e) => {
        if (e.key === 'Escape' && this.state.showAddPersonForm) {
            this.hideForm()
        }
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleEsc)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEsc)
    }

    addNewBiography = (biographyObg) => {
        const newBiography = [...this.state.arrey];
        newBiography.unshift(biographyObg)

        this.setState({
            arrey: newBiography
        })
    }

    render() {

        const personarray = this.state.arrey.map((item, pos) => {

            return (
                <Person
                    key={item.id}
                    img={item.image}
                    name={item.person_name}
                    year_of_birth={item.years_of_life.year_of_birth}
                    year_of_death={item.years_of_life.year_of_death}
                    key_dates={item.key_dates}
                    event={item.event}
                    details={item.biography}
                    remov={() => this.removPerson(pos)}
                    pos={pos}
                />
            )
        })


        return (
            <div className={style.wrapper}>
                {this.state.showAddPersonForm ?
                    <AddPersonForm
                        hideForm={this.hideForm}
                        addMe={this.hideForm} arrey={this.state.arrey}
                        addNewBiography={this.addNewBiography} />
                    : null}
                <AddPerson action='Добавить биографию' showForm={this.showForm} />
                {personarray}
            </div>
        )
    }
}
export default Biography;