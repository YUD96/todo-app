import TodoForm from "./TodoForm.tsx";
import { ChangeEvent, useState } from "react";
import TodoItem from "./TodoItem.tsx";
import { Todo } from "../types/Todo.ts";
import { TodoStatus } from "../types/TodoStatus.ts";

let nextId = 0;

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputValue) {
      setTodoItems([
        ...todoItems,
        { id: nextId++, value: inputValue, status: TodoStatus.UNDONE },
      ]);
    }

    setInputValue("");
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
          status: TodoStatus.DONE,
        };
      }
      return todo;
    });
    setTodoItems(doneTodoItems);
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <TodoForm
            onInputChange={handleInputChange}
            inputValue={inputValue}
            onAddButtonClick={handleAddButtonClick}
          />
        </div>
        <div>
          {todoItems.map((todo) => (
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
