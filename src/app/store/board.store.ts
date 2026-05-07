import { v4 } from 'uuid';
import { TodoList } from './board.model';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type BoardState = {
  id: string;
  lists: TodoList[];
};

const initial_state: BoardState = {
  id: v4(),
  lists: [
    {
      id: v4(),
      title: 'A fazer',
      tasks: [
        {
          id: v4(),
          title: 'Learn Angular',
          completed: false,
          order: 0,
          arquived: false,
        },
      ],
      order: 0,
    },
  ],
};

export const BoardStore = signalStore(
  { providedIn: 'root' },
  withState(initial_state),
  withMethods((store) => ({
    addList(title: string) {
      patchState(store, (state) => {
        const new_state = state;
        new_state.lists.push({
          id: v4(),
          title,
          tasks: [],
          order: state.lists.length,
        });
        return new_state;
      });
    },
    addTask(title: string, parent_id: string) {
      patchState(store, (state) => {
        const new_state = state;
        new_state.lists
          .find((list) => list.id == parent_id)!
          .tasks.push({
            id: v4(),
            title,
            completed: false,
            order: !new_state.lists.find((list) => list.id == parent_id)!.tasks.length
              ? new_state.lists.find((list) => list.id == parent_id)!.tasks.length
              : 0,
            arquived: false,
          });
        return new_state;
      });
    },
  })),
);
