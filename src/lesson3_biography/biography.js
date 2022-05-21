import React from "react";
import style from './biography.module.css';
import Person from './components/person/person.js';
import biography from "./biography_array.js";
import AddPerson from "./components/add_person/AddPerson";
import AddPersonForm from "./components/add_person/addPersonForm/addPersonForm";
import EditPersonForm from "./components/edit_person/EditPerson.js";


class Biography extends React.Component {

    state = {
        array: /*JSON.parse(localStorage.getItem('personarray')) || */ biography,
        showAddPersonForm: false,
        showEditForm: false,
        selectBiography: {},
        index: '',
    }

    /* sort = (sortArray) => {
  
          if (sortArray.length < 2) {
              return sortArray;
          }
          else {
              const pivot = sortArray[Math.floor(Math.random() * sortArray.length)].key_dates.length -1;
              /*const pivot = sortArray[Math.floor(sortArray.length/2)].key_dates.length;
              console.log(pivot)
              const less = [];
              const greater = [];
              const same = [];
              for (let i = 0; i < sortArray.length -1; i++) {
  
                  if (sortArray[i].key_dates.length  < pivot) {
                      less.push(sortArray[i]);
                  }
  
                  if (sortArray[i].key_dates.length > pivot) {
                      greater.push(sortArray[i]);
                  }
  
                  if (sortArray[i].key_dates.length  === pivot) {
                      same.push(sortArray[i]);
  
                  }
  
              }
  
              return [...this.sort(less), ...this.sort(same), ...this.sort(greater)]
  
          }
  
      }*/

    /* patrition = (sortArray, low, hi) => {
         const pivot = sortArray[Math.floor(Math.random() * sortArray.length)].key_dates.length -1;
         while (hi >= low) {
             while (sortArray[hi].key_dates.length -1> pivot) {
                 hi--;
             }
 
             while (sortArray[low].key_dates.length -1< pivot) {
                 low++;
             }
 
             if (hi >= low) { 
                 const temp = sortArray[low];
                 sortArray[low] = sortArray[hi];
                 sortArray[hi] = temp;
                 hi--;
                 low++;
             }
         }
         return low;
     }
 
     qSort =(sortArray, low=0, hi=sortArray.length-1)=>{
        if(low<hi){
             const index = this.patrition(sortArray, low, hi);
             this.qSort(sortArray, index -1);
             this.qSort(sortArray, index, hi);
        }
        return sortArray;
     }*/

    bubble = (sortArray) => {

        const length = sortArray.length;

        for (let i = length; i > 0; i--) {

            for (let z = 0; z < i - 1; z++) {

                if (sortArray[z].key_dates.length > sortArray[z + 1].key_dates.length) {

                    const temp = sortArray[z];

                    sortArray[z] = sortArray[z + 1];

                    sortArray[z + 1] = temp;
                }
            }
        }
        return sortArray;
    }

    sortArray = () => {
        const sortArray = [...this.state.array];
        /* this.qSort(sortArray)
         console.log(this.qSort(sortArray))*/
        this.bubble(sortArray)
        console.log(this.bubble(sortArray))
        this.setState({
            array: sortArray
        })
    }

    removPerson = pos => {
        if (window.confirm(`Шо прям взять и удалить ${this.state.array[pos].person_name}?`)) {
            if (window.confirm('В каждом из нас есть немного Гомера Симпсона.')) {
                const arrayCopy = [...this.state.array];
                arrayCopy.splice(pos, 1);
                this.setState({
                    array: arrayCopy
                });
            }
        }
        /*localStorage.getItem('personarray', JSON.stringify(arrayCopy));*/
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
        const newBiography = [...this.state.array];
        newBiography.unshift(biographyObg)

        this.setState({
            array: newBiography
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


    applyСhanges = (editedObg) => {
        const temp = [...this.state.array]
        temp.splice(this.state.index, 1, editedObg)
        console.log(temp)
        this.setState({
            array: temp
        })
    }

    sortOfBorn = () => {
        const temp = [...this.state.array];
        temp.sort(function (a, b) {
            return a.years_of_life.year_of_birth - b.years_of_life.year_of_birth
        })
        this.setState({
            array: temp
        })
    }


    render() {

        const personarray = this.state.array.map((item, pos) => {

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
                    hendelSelectBiography={() => this.hendelSelectBiography(item)}

                />
            )
        })


        return (
            <div className={style.wrapper}>
                {this.state.showAddPersonForm ?
                    <AddPersonForm
                        hideForm={this.hideForm}
                        array={this.state.array}
                        addNewBiography={this.addNewBiography} />
                    : null}
                {this.state.showEditForm ?
                    <EditPersonForm
                        hideForm={this.hideForm}
                        array={this.state.array}
                        selectBiography={this.state.selectBiography}
                        applyСhanges={this.applyСhanges}
                    />
                    : null}
                <AddPerson action='Добавить биографию' showForm={this.showForm} />
                <button className={style.sort_born_btn} onClick={this.sortOfBorn} >Сортировать по дате <br /> рождения (sort)</button>
                <button className={style.sort_born_btn} onClick={this.sortArray} >Сортировать по <br /> колтичеству ключевых <br /> дат</button>
                {personarray}
            </div>
        )
    }
}
export default Biography;