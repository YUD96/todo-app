import { useRef } from "react";

type Props = {
  onAddButtonClick: (value: string) => void;
};

const TodoForm = ({ onAddButtonClick }: Props) => {
  const inputValueRef = useRef<HTMLInputElement>(null);
  const handleAddButtonClick = () => {
    if (inputValueRef.current) {
      const value = inputValueRef.current.value;
      onAddButtonClick(value);
      inputValueRef.current.value = "";
    }
  };

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        ref={inputValueRef}
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal"
        onClick={handleAddButtonClick}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
