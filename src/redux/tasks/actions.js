import { taskTypes } from "./task-types"

export const addTask = (payload) => (
    {type: taskTypes.addTask, payload}
)

export const deleteTask = (payload) => (
    {type: taskTypes.deleteTask, payload}
)