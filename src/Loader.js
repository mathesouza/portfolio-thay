import React,{Component} from 'react'
import LoadingOverlay from 'react-loading-overlay';

class Loader extends Component {
    render() {
     return(
        <LoadingOverlay
            active={true}
            spinner
            text='loading'
            >
        </LoadingOverlay>
     );
    }
 }
 export default Loader