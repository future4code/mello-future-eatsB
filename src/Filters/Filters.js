

export const initialState = {
    productSearch: ""
}


const Filters = (state, action) =>  {
    switch(action.type) {
        case "SET_FILTERS":
            return {
                productSearch: action.productSearch,
            };

            case "RESET_FILTERS":
                return {
                    productSearch: "",
                };

        default:
            return state;
    };
}
  
export default Filters;