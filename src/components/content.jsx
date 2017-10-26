import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleDescription} from '../../assets/toggle';
import {mapStateToPropsContent,styles} from '../Container/container'; //includes the inline styling object props mapper function



class Content extends Component {


    //dummy arrayList generation.
    //component method.
    generateStarRating(size){
        let itemArray= [];
        for(let x=0; x < size; x++){
            itemArray.push("item"+ x);
        }
        return itemArray;
    }

    // This would be used to render UI throught the React element.
    //....BEGIN
    renderData() {
        let itemArray=[];
        return this.props.events.map((item) => {
            itemArray = this.generateStarRating(item.star_rating);
            return (
                <li key={item.id}>
                    <div className="card">
                      <div className="label">
                            <div className="hotel_title">
                                <span>{item.hotel_name } </span>

                                {itemArray.map((i)=> Rating(i) )}

                                <p style={{marginTop:10}}>{item.address}</p>
                            </div>
                            
                            <div className="price">Holiday Price <p>£{item.price}</p></div>
                      </div>
                      <div className="img"><img src={item.image} alt="Avatar" /></div>
                      <div className="container" id="container">
                        <div className="more_info"><h5>{item.more_info} <i style={styles.more_info} id={"toggle"+item.id} onClick={toggleDescription.bind(this,item.id)} className="arrow"></i></h5></div>
                      </div>
                      <div className="description" style={styles.description} id={"description"+item.id}>{item.description}  
                            <button 
                                style={styles.button} 
                                className="button">BOOK NOW
                            </button>
                    </div> 
                      
                    </div>
                </li>
            );
        });
    }

    //.....ENDS

    render() {
        return (
            <ul style={{listStyleType:"none"}}>
                {this.renderData()}
            </ul>
        );
    }
}

// This would be used to display the star rating. would be invoked and uniquely identified with the key
function Rating(index) {
    return (<span key={index} className='fa fa-star checked'></span>);
}


export default connect(mapStateToPropsContent)(Content);