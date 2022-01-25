import {data} from '../data';

const INITIAL_STATE = {
    bookList : data,
    card:[]
};

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_BAG':
            return {...state , card : [...state.card , action.payload]}
        default:
             return state;
    }
    
};
