export type Board = {
  id: string;
  lists: TodoList[];
};

export type TodoList = {
  id: string;
  title: string;
  order: number;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  order: number;
  completed: boolean;
  arquived: boolean;
};
