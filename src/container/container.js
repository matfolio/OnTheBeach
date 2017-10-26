import {sortByPrice, sortByStarRating, sortAlphabetically } from '../actions/actioncreators';
import {bindActionCreators} from 'redux';

export function mapStateToProps(state) {
    return {
        events: state.reducer1
    };
}


export function matchDispatchToProps(dispatch){
    return bindActionCreators({ sortByPrice: sortByPrice,
                                sortByStarRating: sortByStarRating,
                                sortAlphabetically: sortAlphabetically
                             }, dispatch );
}

export function mapStateToPropsContent(state) {
    return {
        events: state.reducer2
    };
}

// Using the Inline-style.

export const styles = {
    more_info: {
        transform: "rotate(-45deg)",
        position:"absolute",
        color:"#233982",
        right:0,
        textAlign:"center",
        cursor:"pointer"
    },

    description:{
        color:"#1ba1d1"
    },

    button:{
        position:"absolute",
        color:"white",
        bottom:10,
        left: '50%',
        right:-50,
        transform: "translate(-50%,-0%)",
        background:"#233982",
        border: "none",
        width:150,
        padding: "12px 10px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: 12,
        margin: "4px 6px",
        cursor: "pointer",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)"
    }

    

}