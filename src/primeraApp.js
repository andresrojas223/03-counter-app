import React from 'react';
import PropTypes from 'prop-types'

const PrimerApp = ({saludo}) => {


  return( 

   <div>

   <h1> {saludo} </h1>
   <p>Mi primera aplicacion</p>

   </div> 
  );

}

PrimerApp.propTypes = {

  saludo: PropTypes.string.isRequired


}



export default PrimerApp;