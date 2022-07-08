import React from 'react';
import style from './person.module.css';

function Person({
  classNamePerson, active, draggable, onDragStart,
  onDragLeave, onDragEnd, onDragOver, onDrop, key_dates,
  img, onLoad, onError, name, year_of_birth,
  year_of_death, hendelSelectBiography, edit, remov, details
}) {
  const hendleEdit = () => {
    hendelSelectBiography();
    edit();
  };
  return (
    <>
      <div
        className={classNamePerson}
        onClick={active}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragLeave={onDragLeave}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <div className={style.profile}>
          <img className={style.profil_img} id="image_person" src={img} alt="" onLoad={(e) => onLoad()} onError={(e) => onError()} />
          <p className={style.profil_name}>{name}</p>
          <p className={style.years_of_life}>
            {year_of_birth}
            {' '}
            - 
            {' '}
            {year_of_death}
          </p>
        </div>
        <div className={style.biography}>
          <button className={style.person_btn} onClick={remov}>Удалить</button>
          <button className={style.person_btn} onClick={hendleEdit}>Редактировать</button>
          <div className={style.key_dates}>
            <h2 className={style.h2}>Ключевые события</h2>
            {key_dates.map((item) => (
              <p key={item.id}> 
                {' '}
                {item.key_date}
                {' '}
                - 
                {' '}
                {item.event}
                {' '}
              </p>
            ))}
          </div>
          <div className={style.h2_p}>
            <h2 className={style.h2}>Биография</h2>
            <p className={style.p_biography}>{details}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Person; 
