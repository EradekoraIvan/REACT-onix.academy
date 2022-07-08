import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import style from './biography.module.css';
import Person from './components/person/person';
import biography from './biography_array';
import AddPerson from './components/add_person/AddPerson';
import AddPersonForm from './components/add_person/addPersonForm/addPersonForm';
import EditPersonForm from './components/edit_person/EditPerson';

function Biography() {
  const [array, setArray] = useState(/* JSON.parse(localStorage.getItem('personarray')) || */ biography);
  const [showAddPersonForm, setShowAddPersonForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectBiography, setSelectBiography] = useState({});
  const [index, setIndex] = useState('');
  const [indexActivPerson, setIndexActivPerson] = useState(0);
  const [clickPerson, setClickPerson] = useState(false);

  const bubble = (babbleArray) => {
    const sortArray = [...babbleArray];
    const { length } = sortArray;
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

  const sortArray = (babbleArray) => {
    setArray(bubble(babbleArray))
  };

  const removPerson = (pos) => {
    if (window.confirm(`Удалить ${array[pos].person_name}?`)) {
      const arrayCopy = [...array];
      arrayCopy.splice(pos, 1);
      setArray(arrayCopy);
    }
  };

  const showForm = () => {
    setShowAddPersonForm(true);
  };

  const hideForm = () => {
    setShowAddPersonForm(false),
    setShowEditForm(false);
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape' && showAddPersonForm) {
      hideForm();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleEsc);
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  });

  useEffect(() => {
    window.addEventListener('keyup', UpDown);
    return () => {
      window.removeEventListener('keyup', UpDown);
    };
  });

  const addNewBiography = (biographyObg) => {
    const newBiography = [...array];
    newBiography.unshift(biographyObg);
    setArray(newBiography);
  };

  const edit = (pos) => {
    setShowEditForm(true),
    setIndex(pos);
  };

  const hendelSelectBiography = (selectBiography) => {
    setSelectBiography(selectBiography);
  };

  const applyChanges = (editedObg) => {
    const temp = [...array];
    temp.splice(index, 1, editedObg);
    setArray(temp);
  };

  const sortOfBorn = () => {
    const temp = [...array];
    temp.sort((a, b) => {
      return a.years_of_life.year_of_birth - b.years_of_life.year_of_birth;
    });
    setArray(temp);
  };

  const UpDown = (e) => {
    if (e.key === 's') {
      if (indexActivPerson || clickPerson === true) {
        setIndexActivPerson(indexActivPerson + 1);
        setClickPerson(true);
      }
      if (indexActivPerson === 0 && clickPerson === false) {
        setClickPerson(true);
      }
      if (indexActivPerson === array.length - 1) {
        setIndexActivPerson(0);
        setClickPerson(true);
      }
    }
    if (e.key === 'w') {
      if (indexActivPerson || clickPerson === true) {
        setIndexActivPerson(indexActivPerson - 1);
        setClickPerson(true);
      }
      if (indexActivPerson === 0) {
        setIndexActivPerson(array.length - 1);
        setClickPerson(true);
      }
    }
  };

  const activePerson = (pos) => {
    console.log('activePerson');
    indexActivPerson === pos
      ? (
        setIndexActivPerson(0),
        setClickPerson(!clickPerson)
      )
      : (
        setIndexActivPerson(pos),
        setClickPerson(true)
      );
  };

  const onLoad = (e) => {
    console.log(`изображение ${e.person_name} загруженно`);
  };

  const onError = (e) => {
    console.log(`изображение ${e.person_name}: ошибка`);
  };

  const personarray = array.map((item, pos) => {
    return (
      <Reorder.Item value={item} whileDrag={{ scale: 0.8 }}>
        <Person
          key={item.id}
          img={item.image}
          name={item.person_name}
          year_of_birth={item.years_of_life.year_of_birth}
          year_of_death={item.years_of_life.year_of_death}
          key_dates={item.key_dates}
          event={item.event}
          details={item.biography}
          remov={() => removPerson(pos)}
          pos={pos}
          edit={() => edit(pos)}
          hendelSelectBiography={() => hendelSelectBiography(item)}
          active={() => activePerson(pos)}
          classNamePerson={`${style.person_wrapper} ${indexActivPerson === pos
            && clickPerson ? style.person_wrapper_active : ''}`}
          onLoad={() => onLoad(item)}
          onError={() => onError(item)}
          setArray={setArray}
        />
      </Reorder.Item>
    );
  });

  return (
    <div className={style.wrapper}>
      {showAddPersonForm
        ? (
          <AddPersonForm
            hideForm={hideForm}
            array={array}
            addNewBiography={addNewBiography}
          />
        )
        : null}
      {showEditForm
        ? (
          <EditPersonForm
            hideForm={hideForm}
            array={array}
            selectBiography={selectBiography}
            applyСhanges={applyChanges}
          />
        )
        : null}
      <AddPerson action="Добавить биографию" showForm={showForm} />
      <button type="button" className={style.sort_born_btn} onClick={sortOfBorn}>
        Сортировать по дате
        <br />
        {' '}
        рождения (sort)
      </button>
      <button className={style.sort_born_btn} type="button" onClick={() => sortArray(array)}>
        Сортировать по
        <br />
        {' '}
        колтичеству ключевых
        <br />
        {' '}
        дат
      </button>
      <Reorder.Group className={style.ReorderGroup} axys="y" values={array} onReorder={setArray}>
        {personarray}
      </Reorder.Group>
    </div>
  );
}
export default Biography;
