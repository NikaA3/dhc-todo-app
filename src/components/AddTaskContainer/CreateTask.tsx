import { toast } from "react-toastify";
import CloseIcon from "../../assets/CloseIcon";
import SaveButton from "../SaveButton/SaveButton";
import "./CreateTask.css";

interface ICreateTask {
  setAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  todoTitleValue: string;
  setTodoTitleValue: React.Dispatch<React.SetStateAction<string>>;
  todoContentValue: string;
  setTodoContentValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
}

const CreateTask = ({
  setAddTask,
  todoTitleValue,
  setTodoTitleValue,
  todoContentValue,
  setTodoContentValue,
  addTodo,
}: ICreateTask) => {
  const saveTodoHandler = () => {
    if (todoTitleValue.length === 0 || todoContentValue.length === 0) {
      toast.error("You must fill title and content");
    } else {
      setAddTask(false);
      addTodo();
    }
    setTodoTitleValue("");
    setTodoContentValue("");
  };
  return (
    <div className="w-[335px] h-[232px] bg-task-background-color rounded-[12px] p-[12px]">
      <div className="flex justify-between items-center mb-[8px]">
        <div></div>
        <div className="custom-text-lg">Add task</div>
        <CloseIcon onClick={() => setAddTask(false)} />
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
          className="w-[311px] h-[99px] bg-background-color create-task-content 
					px-[12px]"
          value={todoContentValue}
          onChange={(e) => setTodoContentValue(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        <SaveButton title="Save" onClick={saveTodoHandler} />
      </div>
    </div>
  );
};

export default CreateTask;
