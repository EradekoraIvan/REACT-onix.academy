import React from 'react';
import style from './biography.module.css';
import Person from './components/person/person';
import biography from './biography_array';
import AddPerson from './components/add_person/AddPerson';
import AddPersonForm from './components/add_person/addPersonForm/addPersonForm';
import EditPersonForm from './components/edit_person/EditPerson';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: /* JSON.parse(localStorage.getItem('personarray')) || */ biography,
      showAddPersonForm: false,
      showEditForm: false,
      selectBiography: {},
      index: '',
      indexActivPerson: 0,
      clickPerson: false,
      currentCard: '',
      indexCurrentCard: '',
      overCard: '',
    };
  }

  bubble = (array) => {
    const sortArray = [...array];
    const length = sortArray.length;

    for (let i = length; i > 0; i - 1) {
      for (let z = 0; z < i - 1; z + 1) {
        if (sortArray[z].key_dates.length > sortArray[z + 1].key_dates.length) {
          const temp = sortArray[z];

          sortArray[z] = sortArray[z + 1];

          sortArray[z + 1] = temp;
        }
      }
    }
    return sortArray;
  };

  sortArray = (array) => {
    this.setState({
      array: this.bubble(array)
    });
  };

  removPerson = (pos) => {
    const { array, } = this.state;
    if (window.confirm(`Шо прям взять и удалить ${array[pos].person_name}?`)) {
      if (window.confirm('В каждом из нас есть немного Гомера Симпсона.')) {
        const arrayCopy = [...array];
        arrayCopy.splice(pos, 1);
        this.setState({
          array: arrayCopy
        });
      }
    }
    /* localStorage.getItem('personarray', JSON.stringify(arrayCopy)); */
  };

  showForm = () => {
    this.setState({
      showAddPersonForm: true
    });
  };

  hideForm = () => {
    this.setState({
      showAddPersonForm: false,
      showEditForm: false
    });
  };

  handleEsc = (e) => {
    const { showAddPersonForm } = this.state;
    if (e.key === 'Escape' && showAddPersonForm) {
      this.hideForm();
    }
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleEsc);
    window.addEventListener('keyup', this.UpDown);
    /* window.addEventListener('onLoad', this.onLoad) */
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleEsc);
    window.removeEventListener('keyup', this.UpDown);
  }

  addNewBiography = (biographyObg) => {
    const { array } = this.state;
    const newBiography = [...array];
    newBiography.unshift(biographyObg);

    this.setState({
      array: newBiography
    });
  };

  edit = (pos) => {
    this.setState({
      showEditForm: true,
      index: pos
    });
  };

  hendelSelectBiography = (selectBiography) => {
    this.setState({
      selectBiography,
    });
  };

  applyChanges = (editedObg) => {
    const { array, index } = this.state;
    const temp = [...array];
    temp.splice(index, 1, editedObg);
    this.setState({
      array: temp
    });
  };

  sortOfBorn = () => {
    const { array } = this.state;
    const temp = [...array];
    temp.sort((a, b) => {
      return a.years_of_life.year_of_birth - b.years_of_life.year_of_birth;
    });
    this.setState({
      array: temp
    });
  };

  UpDown = (e) => {
    const { indexActivPerson, clickPerson, array } = this.state;
    if (e.key === 's') {
      if (indexActivPerson || clickPerson === true) {
        this.setState({
          indexActivPerson: indexActivPerson + 1,
          clickPerson: true
        });
      }

      if (indexActivPerson === 0 && clickPerson === false) {
        this.setState({

          clickPerson: true
        });
      }
      if (indexActivPerson === array.length - 1) {
        this.setState({
          indexActivPerson: 0,
          clickPerson: true
        });
      }
    }

    if (e.key === 'w') {
      if (indexActivPerson || clickPerson === true) {
        this.setState({
          indexActivPerson: indexActivPerson - 1,
          clickPerson: true
        });
      }
      if (indexActivPerson === 0) {
        this.setState({
          indexActivPerson: array.length - 1,
          clickPerson: true
        });
      }
    }
  };

  activePerson = (pos) => {
    const { clickPerson, indexActivPerson } = this.state;
    indexActivPerson === pos
      ? this.setState({
        indexActivPerson: 0,
        clickPerson: !clickPerson
      })

      : this.setState({

        indexActivPerson: pos,
        clickPerson: true
      });
  };

  DragStartHandler = (e, item, pos) => {
    this.setState({
      currentCard: item,
      indexCurrentCard: pos
    });
  };

  DropHandler = (e, item) => {
    const {
      array, currentCard, indexCurrentCard, overCard 
    } = this.state;
    e.preventDefault();
    const dropArray = [...array];
    dropArray.map((el, index) => {
      if (el.id === item.id) {
        dropArray[index] = currentCard;
        dropArray[indexCurrentCard] = overCard;
      }
      return dropArray;
    });
    this.setState({
      array: dropArray
    });
  };

  DragOverHandler = (e, item) => {
    e.preventDefault();
    this.setState({
      overCard: item
    });
  };

  DragLeaveHandler = () => {

  };

  DragEndHandler = () => {

  };

  onLoad = (e) => {
    console.log(`изображение ${e.person_name} загруженно`);
  };

  onError = (e) => {
    console.log(`изображение ${e.person_name}: ошибка`);
  };

  render() {
    const {
      array, indexActivPerson, clickPerson, showAddPersonForm, showEditForm, selectBiography, 
    } = this.state;
    const personarray = array.map((item, pos) => {
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
          classNamePerson={`${style.person_wrapper} ${indexActivPerson === pos
                        && clickPerson ? style.person_wrapper_active : ''}`}
          draggable
          onDragStart={(e) => this.DragStartHandler(e, item, pos)}
          onDragLeave={(e) => this.DragLeaveHandler(e)}
          onDragEnd={(e) => this.DragEndHandler(e)}
          onDragOver={(e) => this.DragOverHandler(e, item)}
          onDrop={(e) => this.DropHandler(e, item)}
          onLoad={() => this.onLoad(item)}
          onError={() => this.onError(item)}
        />
      );
    });

    return (
      <div className={style.wrapper}>
        {showAddPersonForm
          ? (
            <AddPersonForm
              hideForm={this.hideForm}
              array={array}
              addNewBiography={this.addNewBiography}
            />
          )
          : null}
        {showEditForm
          ? (
            <EditPersonForm
              hideForm={this.hideForm}
              array={array}
              selectBiography={selectBiography}
              applyСhanges={this.applyChanges}
            />
          )
          : null}
        <AddPerson action="Добавить биографию" showForm={this.showForm} />
        <button type="button" className={style.sort_born_btn} onClick={this.sortOfBorn}>
          Сортировать по дате
          <br />
          {' '}
          рождения (sort)
        </button>
        <button className={style.sort_born_btn} type="button" onClick={() => this.sortArray(array)}>
          Сортировать по
          <br />
          {' '}
          колтичеству ключевых
          <br />
          {' '}
          дат
        </button>
        {personarray}
      </div>
    );
  }
}
export default Biography;
