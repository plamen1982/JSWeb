import React from 'react';
import Snackbar from '../App/Snackbar';
                
const AppFooter = (props) => {
    console.log(props)
    return    <Snackbar message={props.message} isSnackOpen={props.isSnackOpen} />
};

export default AppFooter;