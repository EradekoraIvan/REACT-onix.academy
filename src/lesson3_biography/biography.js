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
        indexActivPerson: 0,
        clickPerson: false,
        currentCard: '',
        indexCurrentCard: '',
        overCard: '',
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

    bubble = (array) => {

        const sortArray = [...array]
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

    sortArray = (array) => {

        this.setState({
            array: this.bubble(array)
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
        window.addEventListener('keyup', this.UpDown)
        /*window.addEventListener('onLoad', this.onLoad)*/
        
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEsc)
        window.removeEventListener('keyup', this.UpDown)
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


    applyChanges = (editedObg) => {
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

    UpDown = (e) => {

        if (e.key === 's') {
            
            if (this.state.indexActivPerson || this.state.clickPerson === true) {
                this.setState({
                    indexActivPerson: this.state.indexActivPerson + 1,
                    clickPerson: true
                })
            }

            if (this.state.indexActivPerson === 0 && this.state.clickPerson === false) {
                this.setState({

                    clickPerson: true
                })
                console.log('++')
            }
            if (this.state.indexActivPerson === this.state.array.length - 1) {
                this.setState({
                    indexActivPerson: 0,
                    clickPerson: true
                })
            }

        }

        if (e.key === 'w') {
            if (this.state.indexActivPerson || this.state.clickPerson === true) {
                this.setState({
                    indexActivPerson: this.state.indexActivPerson - 1,
                    clickPerson: true
                })
            }
            if (this.state.indexActivPerson === 0) {
                this.setState({
                    indexActivPerson: this.state.array.length - 1,
                    clickPerson: true
                })
            }
        }

    }

    activePerson = (pos) => {

        this.state.indexActivPerson === pos ?
            this.setState({
                indexActivPerson: 0,
                clickPerson: !this.state.clickPerson
            })

            :

            this.setState({

                indexActivPerson: pos,
                clickPerson: true
            })
        console.log(this.state.indexActivPerson)

    }

    DragStartHandler = (e, item, pos) => {
        this.setState({
            currentCard: item,
            indexCurrentCard: pos
        })
        console.log('drag', item)
    }

    DropHandler = (e, item, pos) => {
        e.preventDefault()
        console.log('drop', item)
        const dropArray = [...this.state.array]
        dropArray.map((el, index) =>{
            if(el.id === item.id){
               
               dropArray[index] = this.state.currentCard;
               dropArray[this.state.indexCurrentCard] = this.state.overCard;
               
            }
            return dropArray;
        })
        this.setState({
            array: dropArray
        })
        console.log(dropArray)
    }

    DragOverHandler = (e, item) => {
        e.preventDefault()
        this.setState({
            overCard: item
        })
    }

    DragLeaveHandler =(e)=>{

    }

    DragEndHandler =(e)=>{

    }

    onLoad =(e)=>{
        console.log(`изображение ${e.person_name} загруженно`)
    }

    onError =(e)=>{
        console.log(`изображение ${e.person_name}: ошибка`)
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
                    active={() => this.activePerson(pos)}
                    classNamePerson={`${style.person_wrapper} ${this.state.indexActivPerson === pos
                        && this.state.clickPerson ? style.person_wrapper_active : ''}`}
                    draggable={true}
                    onDragStart={(e) => this.DragStartHandler(e, item, pos)}
                    onDragLeave={(e) => this.DragLeaveHandler(e)}
                    onDragEnd={(e) => this.DragEndHandler(e)}
                    onDragOver={(e) => this.DragOverHandler(e, item)}
                    onDrop={(e) => this.DropHandler(e, item)}
                    onLoad={()=> this.onLoad(item)}
                    onError={()=> this.onError(item)}
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
                        applyСhanges={this.applyChanges}
                    />
                    : null}
                <AddPerson action='Добавить биографию' showForm={this.showForm} />
                <button className={style.sort_born_btn} onClick={this.sortOfBorn} >Сортировать по дате <br /> рождения (sort)</button>
                <button className={style.sort_born_btn} onClick={() => this.sortArray(this.state.array)} >Сортировать по <br /> колтичеству ключевых <br /> дат</button>
                {personarray}
            </div>
        )
    }
}
export default Biography;