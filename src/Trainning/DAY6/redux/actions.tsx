export const addCart = (payload: any) => {
    return {
        type: 'add_car',
        payload,
    };
};

export const setInput = (payload: any) => {
    return {
        type: 'set_input',
        payload,
    };
};
