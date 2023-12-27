import DeleteIcon from "../../assets/DeleteIcon";
import CompletedIcon from "../../assets/CompletedIcon";
import DownArrowIcon from "../../assets/DownArrowIcon";
import UpArrowIcon from "../../assets/UpArrowIcon";
import { useContext, useEffect } from "react";
import TodoContext from "../../context/TodoContext";

const CompletedTask = () => {
  const {
    completedTodo,
    setCompeletedTodo,
    minimizeTask,
    minimizeTaskToggler,
    deleteTodo,
  } = useContext(TodoContext) || {};

  const deleteCompletedTodo = (id: number) => {
    const filteredTodos = completedTodo!.filter((todo) => todo.id !== id);
    setCompeletedTodo && setCompeletedTodo(filteredTodos);
    localStorage.setItem("completedTodoItems", JSON.stringify(filteredTodos));
  };

  useEffect(() => {
    const storedTodoItems = JSON.parse(
      localStorage.getItem("completedTodoItems") || "[]"
    );

    setCompeletedTodo && setCompeletedTodo(storedTodoItems);
  }, []);

  return (
    <>
      {completedTodo?.map((todoItem) => {
        return (
          <div
            className={`w-[335px] ${
              minimizeTask && minimizeTask[todoItem.id]
                ? "h-[172px]"
                : "h-[101px]"
            }  bg-task-background-color pb-[12px] px-[20px] rounded-[12px] task-container flex flex-col justify-between p-[12px] mb-2`}
            key={todoItem.id}
          >
            <div className="flex justify-between">
              <div className="custom-text-lg">{todoItem.title}</div>
              {minimizeTask && minimizeTask[todoItem.id] ? (
                <UpArrowIcon
                  onClick={() =>
                    minimizeTaskToggler && minimizeTaskToggler(todoItem.id)
                  }
                />
              ) : (
                <DownArrowIcon
                  onClick={() =>
                    minimizeTaskToggler && minimizeTaskToggler(todoItem.id)
                  }
                />
              )}
            </div>
            {minimizeTask && minimizeTask[todoItem.id] && (
              <div className="flex justify-center items-center">
                <div className="w-[311px] h-[54px] task-content">
                  {todoItem.content}
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <DeleteIcon
                  onClick={() => deleteTodo && deleteCompletedTodo(todoItem.id)}
                />
              </div>
              <div className="flex items-center">
                <div className="me-2 mb-[2px] custom-text-sm-light">
                  Completed
                </div>
                <CompletedIcon />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CompletedTask;
