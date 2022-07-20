const initialState = {
    listCar: [],
    input: '',
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'add_car':
            return {
                ...state,
                listCar: [...state.listCar, action.payload],
            };
        case 'set_input':
            return {
                ...state,
                input: action.payload,
            };

        default:
            console.log('có lỗi xảy ra');
            break;
    }
};

export default rootReducer;
