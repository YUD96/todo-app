import TodoForm from "./TodoForm.tsx";
import { ChangeEvent, useState } from "react";
import TodoItem from "./TodoItem.tsx";
import { Todo } from "../types/Todo.ts";
import { TodoStatus } from "../types/TodoStatus.ts";

let nextId = 0;

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [filterText, setFilterText] = useState("");

  const handleAddButtonClick = (value: string) => {
    if (value) {
      setTodoItems([
        ...todoItems,
        { id: nextId++, value: value, status: TodoStatus.UNDONE },
      ]);
    }
  };

  const handleRemoveButtonClick = (targetId: number) => {
    const removedTodoItems = todoItems.filter((todo) => todo.id !== targetId);
    setTodoItems(removedTodoItems);
  };

  const handleDoneButtonClick = (targetId: number) => {
    const doneTodoItems = todoItems.map((todo) => {
      if (targetId === todo.id) {
        return {
          ...todo,
          status:
            todo.status === TodoStatus.DONE
              ? TodoStatus.UNDONE
              : TodoStatus.DONE,
        };
      }
      return todo;
    });
    setTodoItems(doneTodoItems);
  };

  const filterbleTodoItems = todoItems.filter((todo) => {
    return todo.value.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="relative my-3">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Search"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFilterText(e.target.value)
              }
            />
          </div>
          <TodoForm onAddButtonClick={handleAddButtonClick} />
        </div>
        <div>
          {filterbleTodoItems.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemoveButtonClick={handleRemoveButtonClick}
              onDoneButtonClick={handleDoneButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
