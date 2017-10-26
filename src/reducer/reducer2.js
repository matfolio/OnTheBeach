import InitialState from './reducer1'
import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_STAR_RATING } from '../actions/actiontypes'

export default function (state = InitialState(), action) {
    switch (action.type) {

        case SORT_BY_PRICE:
            return action.payload;

        case SORT_ALPHABETICALLY:
            return action.payload;

        case SORT_STAR_RATING:
            return action.payload;
        default:
            return state.sort(function (a, b) {
                            return a.price - b.price;
                        }) 
    }
    
}