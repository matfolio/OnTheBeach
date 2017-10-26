import { SORT_ALPHABETICALLY, SORT_BY_PRICE, SORT_STAR_RATING } from './actiontypes'

export const sortByPrice = (travelevent) => {
    return {
        type: SORT_BY_PRICE,
        payload:travelevent.sort(function (a, b) {
                                return a.price - b.price;
                            }) 
    }
};

export const sortByStarRating = (travelevent) => {
    return {
        type: SORT_STAR_RATING,
        payload: travelevent.sort(function (a, b) {
                                return a.star_rating - b.star_rating;
                            })
    }
};

export const sortAlphabetically = (travelevent) => {
    return {
        type: SORT_ALPHABETICALLY,
        payload: travelevent.sort(function(a, b) {
                                let first = a.hotel_name.toUpperCase();
                                let second = b.hotel_name.toUpperCase();
                                  if (first < second) {
                                    return -1;
                                  }
                                  if (first > second) {
                                    return 1;
                                  }
                                  return 0;
                            })
        }
};