import { useNavigate } from "react-router-dom";
import CalendarIcon from "../../assets/CalendarIcon";
import HistoryIcon from "../../assets/HistoryIcon";
import Border from "../Border/Border";
import "./TaskNavBar.css";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const TaskNavBar = () => {
  const { setTodoItems } = useContext(TodoContext) || {};
  const navigate = useNavigate();
  const { activePage, setActivePage } = useContext(TodoContext) || {};

  const TaskPageHandler = () => {
    navigate("/");
    setActivePage && setActivePage(1);
  };

  const HistoryPageHandler = () => {
    navigate("/history");
    setActivePage && setActivePage(2);
  };

  const clearWholeList = () => {
    setTodoItems && setTodoItems([]);
    localStorage.removeItem("todoItems");
    localStorage.removeItem("completedTodoItems");
  };

  return (
    <div className="padding-medium">
      <div className="flex items-end pb-[20px]">
        <div>
          <div className="custom-text-sm ms-[2px] dark:text-white">Tasks</div>
          <div
            className={`task-navbar-icon cursor-pointer ${
              activePage === 1
                ? "bg-button-background-color dark:bg-dark-icon"
                : "bg-inactive-icon-color dark:bg-inactive-icon-color-dark"
            } me-4`}
          >
            <CalendarIcon onClick={TaskPageHandler} />
          </div>
        </div>
        <div className="me-auto">
          <div className="custom-text-sm dark:text-white">History</div>
          <div
            className={`task-navbar-icon cursor-pointer ${
              activePage === 2
                ? "bg-button-background-color dark:bg-dark-icon"
                : "bg-inactive-icon-color dark:bg-inactive-icon-color-dark"
            }`}
          >
            <HistoryIcon onClick={HistoryPageHandler} />
          </div>
        </div>
        <div
          className="custom-text-md cursor-pointer dark:text-white"
          onClick={clearWholeList}
        >
          Clear all tasks
        </div>
      </div>
      <Border />
    </div>
  );
};

export default TaskNavBar;
