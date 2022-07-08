import React, { useState } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import style from './addPersonForm.module.css';

function AddPersonForm({ addNewBiography, hideForm, array }) {
  const [personName, setPersonName] = useState('');
  const [personBiography, setPersonBiography] = useState('');
  const [clickCreateInput, setClickCreateInput] = useState(false);
  const [keyDatesArray, setKeyDatesArray] = useState([]);
  const [year_of_birth, setyEar_of_birth] = useState('');
  const [year_of_death, setyEar_of_death] = useState('');
  const [input_key_date, setInput_key_date] = useState('');
  const [input_value, setInput_value] = useState('');

  const handleYearBirth = (e) => {
    setyEar_of_birth(e.target.value);
  };

  const handelYearDeath = (e) => {
    setyEar_of_death(e.target.value);
  };

  const handlePersonName = (e) => {
    setPersonName(e.target.value);
  };

  const handlePersonBiography = (e) => {
    setPersonBiography(e.target.value);
  };

  const hendleKeyDate = (e, pos) => {
    const temp = [...keyDatesArray];
    const newTemp = update(temp, {
      [pos]: { key_date: { $set: e.target.value } }
    });
    setInput_key_date(e.target.value);
    setKeyDatesArray(newTemp);
  };

  const hendleEvent = (e, pos) => {
    const temp = [...keyDatesArray];
    const newTemp = update(temp, {
      [pos]: { event: { $set: e.target.value } }
    });
    setInput_key_date(e.target.value);
    setKeyDatesArray(newTemp);
  };

  const createInput = () => {
    const keyDate = {
      id: keyDatesArray.length + 1,
      key_date: '',
      event: '',
    };
    const temp = Array.from(keyDatesArray);
    const keyDatesArrayTemp = [...temp];
    keyDatesArrayTemp.push(keyDate);
    setKeyDatesArray(keyDatesArrayTemp);
    setClickCreateInput(true);
  };

  const createBiography = () => {
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

  const addInput = keyDatesArray.map((item, pos) => {
    return (
      <div key={item.id}>
        <p>Дата</p>
        <input
          type="text"
          name="key_date"
          value={keyDatesArray.input_key_date}
          onChange={(e) => hendleKeyDate(e, pos)}
        />
        <p>Событие</p>
        <input
          type="text"
          name="event"
          value={keyDatesArray.input_value}
          onChange={(e) => hendleEvent(e, pos)}
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
          onChange={handlePersonName}
        />
        <label htmlFor="year_of_birth">Год рождения</label>
        <input
          type="number"
          name="year_of_birth"
          id="year_of_birth"
          value={year_of_birth}
          onChange={handleYearBirth}
        />
        <label htmlFor="year_of_death">Год смерти</label>
        <input
          type="number"
          name="year_of_death"
          id="year_of_death"
          value={year_of_death}
          onChange={handelYearDeath}
        />

        {clickCreateInput ? addInput : null}

        <button type="button" className={style.add_btn} onClick={createInput}>Добавить ключевую дату</button>
        <label htmlFor="biography">Биография</label>
        <textarea
          className={style.input}
          name="biography"
          id="biography"
          rows="10"
          placeholder="biography"
          value={personBiography}
          onChange={handlePersonBiography}
        />
        <button className={style.add_btn} type="button" onClick={createBiography}>Добавыть</button>
      </form>
      <div className={style.overley} onClick={hideForm} />
    </>

  );
}

AddPersonForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
  addNewBiography: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
};

export default AddPersonForm;
