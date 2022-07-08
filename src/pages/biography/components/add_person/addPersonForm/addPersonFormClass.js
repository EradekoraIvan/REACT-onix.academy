import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import style from './addPersonForm.module.css';

class AddPersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: '',
      personBiography: '',
      clickCreateInput: false,
      keyDatesArray: [],
      year_of_birth: '',
      year_of_death: '',
      input_key_date: '',
      input_value: '',
    };
  }

  handleYearBirth = (e) => {
    this.setState({
      year_of_birth: e.target.value
    });
  };

  handelYearDeath = (e) => {
    this.setState({
      year_of_death: e.target.value
    });
  };

  handlePersonName = (e) => {
    this.setState({
      personName: e.target.value
    });
  };

  handlePersonBiography = (e) => {
    this.setState({
      personBiography: e.target.value
    });
  };

  hendleKeyDate = (e, pos) => {
    const { keyDatesArray } = this.state;
    const temp = [...keyDatesArray];
    const newTemp = update(temp, {
      [pos]: { key_date: { $set: e.target.value } }
    });

    this.setState({
      input_key_date: e.target.value,
      keyDatesArray: newTemp,
            
    });
  };

  hendleEvent = (e, pos) => {
    const { keyDatesArray } = this.state;
    const temp = [...keyDatesArray];
    const newTemp = update(temp, {
      [pos]: { event: { $set: e.target.value } }
    });

    this.setState({
      input_key_date: e.target.value,
      keyDatesArray: newTemp,
            
    });
  };

  createInput = () => {
    const { keyDatesArray } = this.state;
    const keyDate = {
      id: keyDatesArray.length + 1,
      key_date: '',
      event: '',
    };

    const temp = Array.from(keyDatesArray);

    const keyDatesArrayTemp = [...temp];
    keyDatesArrayTemp.push(keyDate);

    this.setState({
      keyDatesArray: keyDatesArrayTemp,
      clickCreateInput: true
    });
  };

  createBiography = () => {
    const {
      personName, year_of_birth, year_of_death, keyDatesArray, personBiography 
    } = this.state;
    const { addNewBiography, hideForm, array } = this.props;
    const biographiObg = {
      id: array.length + 1,
      image: `${''}`,
      person_name: personName,
      years_of_life:
            {
              year_of_birth,
              year_of_death,
            },
      key_dates: keyDatesArray,

      biography: personBiography,
    };

    addNewBiography(biographiObg);

    hideForm();
  };

  render() {
    const {
      keyDatesArray, personName, year_of_birth, year_of_death, personBiography, clickCreateInput 
    } = this.state;
    const { hideForm } = this.props;
    const addInput = keyDatesArray.map((item, pos) => {
      return (
        <div key={item.id}>
          <p>Дата</p>
          <input
            type="text"
            name="key_date"
            value={keyDatesArray.input_key_date}
            onChange={(e) => this.hendleKeyDate(e, pos)}
          />
          <p>Событие</p>
          <input
            type="text"
            name="event"
            value={keyDatesArray.input_value}
            onChange={(e) => this.hendleEvent(e, pos)}
          />
        </div>
      );
    });

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
            value={personName}
            onChange={this.handlePersonName}
          />
          <label htmlFor="year_of_birth">Год рождения</label>
          <input
            type="number"
            name="year_of_birth"
            id="year_of_birth"
            value={year_of_birth}
            onChange={this.handleYearBirth}
          />
          <label htmlFor="year_of_death">Год смерти</label>
          <input
            type="number"
            name="year_of_death"
            id="year_of_death"
            value={year_of_death}
            onChange={this.handelYearDeath}
          />

          {clickCreateInput ? addInput : null}

          <button type="button" className={style.add_btn} onClick={this.createInput}>Добавить ключевую дату</button>
          <label htmlFor="biography">Биография</label>
          <textarea
            className={style.input}
            name="biography"
            id="biography"
            rows="10"
            placeholder="biography"
            value={personBiography}
            onChange={this.handlePersonBiography}
          />
          <button className={style.add_btn} type="button" onClick={this.createBiography}>Добавыть</button>
        </form>
        <div className={style.overley} onClick={hideForm} />
      </>

    );
  }
}

AddPersonForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
  addNewBiography: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
};

export default AddPersonForm;
