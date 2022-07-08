import React, { useState } from 'react';
import update from 'immutability-helper';
import style from './Edit.Person.module.css';

function EditPersonForm({ selectBiography, applyСhanges, hideForm }) {
  const [id, setId] = useState(selectBiography.id);
  const [image, setImage] = useState(selectBiography.image);
  const [personName, setPersonName] = useState(selectBiography.person_name);
  const [personBiography, setPersonBiography] = useState(selectBiography.biography);
  const [editKeyDate, setEditKeyDate] = useState(false);
  const [keyDatesArray, setKeyDatesArray] = useState(selectBiography.key_dates);
  const [year_of_birth, setYear_of_birth] = useState(selectBiography.years_of_life.year_of_birth);
  const [year_of_death, setYear_of_death] = useState(selectBiography.years_of_life.year_of_death);
  const [input_key_date, setInput_key_date] = useState('');
  const [input_value, setInput_value] = useState('');

  const handleYearBirth = (e) => {
    setYear_of_birth(e.target.value);
  };

  const handelYearDeath = (e) => {
    setYear_of_death(e.target.value);
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

  const changeEditKeyDate = () => {
    console.log('редактирую');
    setEditKeyDate(true);
  };

  const saveСhanges = () => {
    const temp = [...keyDatesArray];
    console.log(temp);
    const editedObg = {
      id: id + 50,
      image,
      person_name: personName,
      years_of_life:
            {
              year_of_birth,
              year_of_death,
            },
      key_dates: temp,

      biography: personBiography,
    };

    applyСhanges(editedObg);

    hideForm();
  };

  const addInput = keyDatesArray.map((item, pos) => {
    return (
      <div key={item.id}>
        <p>Дата</p>
        <input

          type="text"
          name="key_date"
          value={keyDatesArray[pos].key_date}
          onChange={(e) => hendleKeyDate(e, pos)}
        />
        <p>Событие</p>
        <input

          type="text"
          name="event"
          value={keyDatesArray[pos].event}
          onChange={(e) => hendleEvent(e, pos)}
        />
      </div>
    );
  });

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

        {editKeyDate ? addInput : null}

        <button type="button" className={style.add_btn} onClick={changeEditKeyDate}>Редактировать ключевые даты</button>
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
        <button className={style.add_btn} type="button" onClick={saveСhanges}>Сохранить изменения</button>
      </form>
      <div className={style.overley} onClick={hideForm} />
    </>

  );
}

export default EditPersonForm;
