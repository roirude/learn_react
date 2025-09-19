export type Todo = {
  id: number,
  value: string,
  completed: boolean
}

export type ActionReducer = {
  type: string,
  payload: Todo
}