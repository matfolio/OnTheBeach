import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleDescription} from '../../assets/toggle';
import {mapStateToProps,matchDispatchToProps} from '../Container/container';

// We could use component state but we have the so redux handling the state for us 
class Operation extends Component {

    render() {
        //Thanks to ES6
        let {sortAlphabetically,sortByPrice,sortByStarRating,events} = this.props;
        return (
            <div>
                <button className="button" onClick={()=> sortAlphabetically(events)}>sort alphabetically</button>
                <button className="button" onClick={()=> sortByPrice(events)}>Sort by price</button>
                <button className="button" onClick={()=> sortByStarRating(events)}>sort by star rating</button>
                
            </div>

        );
    }

}



export default connect(mapStateToProps, matchDispatchToProps)(Operation);
