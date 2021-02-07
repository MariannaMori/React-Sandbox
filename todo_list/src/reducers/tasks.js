const tasks = (state =[], action ) => {
    switch (action.type) {
        case 'ADD_TASK' :
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted
                }
            ];
            default:
                return state;
    }
}

export default tasks;