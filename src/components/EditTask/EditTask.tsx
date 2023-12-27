import { ITodoItems } from "../../App";
import CloseIcon from "../../assets/CloseIcon";
import SaveButton from "../SaveButton/SaveButton";

interface IEditTask {
  editTask: boolean;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  todoTitleValue: string;
  setTodoTitleValue: React.Dispatch<React.SetStateAction<string>>;
  todoContentValue: string;
  setTodoContentValue: React.Dispatch<React.SetStateAction<string>>;
  updateTodo: (id: number, updatedTodo: ITodoItems) => void;
  todoEdit: {
    item: {
      id: number;
      title: string;
      content: string;
    };
    edit: boolean;
  };
}

const EditTask = ({
  setEditTask,
  todoTitleValue,
  setTodoTitleValue,
  todoContentValue,
  setTodoContentValue,
  updateTodo,
  todoEdit,
}: IEditTask) => {
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleSave = () => {
    const updatedTodo = {
      id: generateUniqueId(),
      title: todoTitleValue,
      content: todoContentValue,
    };

    updateTodo(todoEdit.item.id, updatedTodo);
    setEditTask(false);
  };
  return (
    <div className="w-[335px] h-[232px] bg-task-background-color rounded-[12px] p-[12px]">
      <div className="flex justify-between items-center mb-[8px]">
        <div></div>
        <div className="custom-text-lg">Edit task name</div>
        <CloseIcon onClick={() => setEditTask(false)} />
      </div>
      <div className="mb-[8px] flex flex-col justify-center items-center">
        <input
          type="text"
          className="w-[311px] h-[29px] rounded-[6px] border-solid border-2 border-button-background-color mb-[8px] placeholder-text px-[8px] py-[4px]"
          placeholder="Task Name"
          value={todoTitleValue}
          onChange={(e) => setTodoTitleValue(e.target.value)}
        />
        <input
          type="text"
          className="w-[311px] h-[99px] bg-background-color create-task-content px-[12px]"
          value={todoContentValue}
          onChange={(e) => setTodoContentValue(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <SaveButton title="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default EditTask;
