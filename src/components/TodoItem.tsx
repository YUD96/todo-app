import { Todo } from "../types/Todo.ts";
import { TodoStatus } from "../types/TodoStatus.ts";

type Props = {
  todo: Todo;
  onRemoveButtonClick: (id: number) => void;
  onDoneButtonClick: (id: number) => void;
};

const TodoItem = ({ todo, onRemoveButtonClick, onDoneButtonClick }: Props) => {
  return (
    <div className="flex mb-4 items-center">
      <p
        className="w-full text-grey-darkest"
        style={{
          textDecoration:
            todo.status === TodoStatus.DONE ? "line-through" : "none",
        }}
      >
        {todo.value}
      </p>
      <button
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
        onClick={() => onDoneButtonClick(todo.id)}
      >
        Done
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
        onClick={() => onRemoveButtonClick(todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
