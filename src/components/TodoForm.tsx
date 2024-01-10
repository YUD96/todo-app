import { ChangeEvent } from "react";

type Props = {
  onInputChange: (value: string) => void;
  inputValue: string;
  onAddButtonClick: () => void;
};

const TodoForm = ({ onInputChange, inputValue, onAddButtonClick }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal"
        onClick={onAddButtonClick}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
