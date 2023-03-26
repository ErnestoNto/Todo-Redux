import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../redux/tasks/actions'
import * as C from './form'

const Form = () => {
  const [task, setTask] = useState('')

  const tasks = useSelector(reducerCombine => reducerCombine.tasksReducer) 
  const dispatch = useDispatch()

  function addTasks (e) {
    e.preventDefault()

    const newTask = {
      content: task,
      id: Math.floor(Math.random() * 1000)
    }

    dispatch(addTask(newTask))
  }

  return (
    <C.FormContainer>
        <C.InputForm
          type='text'
          placeholder='Digite sua tarefa'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <C.ButtonForm onClick={addTasks}>Adicionar</C.ButtonForm>      
    </C.FormContainer>
  )
}

export default Form
