import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../../redux/tasks/actions'
import * as C from './task-list'

const TaskList = () => {

  const taskList = useSelector(state => state.tasksReducer)
  const dispatch = useDispatch()

  function deleteItem (ID) {
    dispatch(deleteTask(ID))
  }

  return (
    <C.TaskContainer>
      {taskList.tasks.map((task) => (
        <C.TaskItem key={task.id}>
          <C.TaskContent>{task.content}</C.TaskContent>
          <C.ButtonsContainer>
              <C.Button>E</C.Button>
              <C.Button onClick={() => deleteItem(task.id)}>F</C.Button>
          </C.ButtonsContainer>
        </C.TaskItem>
      ))}
    </C.TaskContainer>
  )
}

export default TaskList
