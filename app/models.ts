export interface ToDo {
  text: string,
  completed: boolean,
  id: number
}

export interface IAppState {
  todos: Array<ToDo>;
}