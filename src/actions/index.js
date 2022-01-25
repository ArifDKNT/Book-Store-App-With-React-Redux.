export const addToBag = book =>{
    return {
        type:'ADD_TO_BAG',
        payload : book
    };
};