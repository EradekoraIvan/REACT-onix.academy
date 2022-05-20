import React from "react";
import style from './biography.module.css';
import Person from './components/person/person.js';
import biography from "./biography_array.js";
import AddPerson from "./components/add_person/AddPerson";
import AddPersonForm from "./components/add_person/addPersonForm/addPersonForm";
import EditPersonForm from "./components/edit_person/EditPerson.js";


class Biography extends React.Component {

    state = {
        arrey: /*JSON.parse(localStorage.getItem('personArrey')) || */ biography,
        showAddPersonForm: false,
        showEditForm: false,
        selectBiography: {},
        index: '',
    }

    abcdArray = () => {
    
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
            showAddPersonForm: false,
            showEditForm: false
        })
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

    edit = (pos) => {
        this.setState({
            showEditForm: true,
            index: pos
        })
    }

    hendelSelectBiography = (selectBiography) => {
        this.setState({
            selectBiography: selectBiography,
        })
    }
    

    applyСhanges = (editedObg) =>{
        const temp = [...this.state.arrey]
        temp.splice(this.state.index, 1, editedObg)
        console.log(temp)
        this.setState({
            arrey:temp
        })
    }

    sortOfBorn = () =>{
        const temp = [...this.state.arrey];
        temp.sort(function(a,b){
            return a.years_of_life.year_of_birth - b.years_of_life.year_of_birth
        })
        this.setState({
            arrey: temp
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
                    edit={() => this.edit(pos)}              
                    hendelSelectBiography= {() => this.hendelSelectBiography(item)}
                    
                />
            )
        })


        return (
            <div className={style.wrapper}>
                {this.state.showAddPersonForm ?
                    <AddPersonForm
                        hideForm={this.hideForm}
                        arrey={this.state.arrey}
                        addNewBiography={this.addNewBiography} />
                    : null}
                {this.state.showEditForm ?
                    <EditPersonForm
                        hideForm={this.hideForm}
                        arrey={this.state.arrey}
                        selectBiography={this.state.selectBiography}
                        applyСhanges={this.applyСhanges}
                    />
                    : null}
                <AddPerson action='Добавить биографию' showForm={this.showForm} />
                <button className={style.sort_born_btn} onClick={this.sortOfBorn} >Сортировать по дате <br /> рождения (sort)</button>
                <button className={style.sort_born_btn} onClick={this.abcdArray} >Сортировать по колтичеству ключевых дат</button>
                {personarray}
            </div>
        )
    }
}
export default Biography;