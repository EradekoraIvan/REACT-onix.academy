import React from 'react';
import PropTypes from 'prop-types';
import style from './AddPerson.module.css';

class AddPerson extends React.Component {
  render() {
    const { action, showForm } = this.props;
    return (
      <button type="button" className={style.biography_btn} onClick={showForm}> 
        {' '}
        {action}
        {' '}
      </button>
    );
  }
}

AddPerson.propTypes = {
  action: PropTypes.string.isRequired,
  showForm: PropTypes.func.isRequired,
};

export default AddPerson;
