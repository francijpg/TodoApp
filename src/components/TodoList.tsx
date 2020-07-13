import React from 'react'

interface TodoListProps {
  todo: Todo;
}

export const TodoList:React.FC<TodoListProps> = ({ todo }) => {
  return (
    <div>
      <h1>test {todo}</h1>
    </div>
  )
}