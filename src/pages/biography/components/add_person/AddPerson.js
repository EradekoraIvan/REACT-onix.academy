import React from 'react';
import PropTypes from 'prop-types';
import style from './AddPerson.module.css';

function AddPerson({ action, showForm }) {
  return (
    <button type="button" className={style.biography_btn} onClick={showForm}>
      {' '}
      {action}
      {' '}
    </button>
  );
}

AddPerson.propTypes = {
  action: PropTypes.string.isRequired,
  showForm: PropTypes.func.isRequired,
};

export default AddPerson;
