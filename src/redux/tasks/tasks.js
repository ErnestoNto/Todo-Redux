import { taskTypes } from "./task-types";

const initialState = {
    tasks: []
}

function tasksReducer (state = initialState, action) {
    switch (action.type) {
        case taskTypes.addTask:
            return {...state, tasks: [...state.tasks, action.payload]}
    
        case taskTypes.deleteTask:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        default:
            return state
    }
}

export default tasksReducer