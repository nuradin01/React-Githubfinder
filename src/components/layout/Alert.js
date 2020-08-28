import React, { useContext } from 'react';
import AlertConntext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertConntext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
