import { useContext, useEffect, useState } from "react";
import { ITodoItems } from "../../App";
import CompletedIcon from "../../assets/CompletedIcon";
import DeleteIcon from "../../assets/DeleteIcon";
import EditIcon from "../../assets/EditIcon";
import UpArrowIcon from "../../assets/UpArrowIcon";
import "./Task.css";
import DownArrowIcon from "../../assets/DownArrowIcon";
import TodoContext from "../../context/TodoContext";

interface ITask {
  setTodoTitleValue: React.Dispatch<React.SetStateAction<string>>;
  setTodoContentValue: React.Dispatch<React.SetStateAction<string>>;
  editTask: boolean;
  setEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  todoEdit: {
    item: {
      id: number;
      title: string;
      content: string;
    };
    edit: boolean;
  };
  setTodoEdit: React.Dispatch<
    React.SetStateAction<{
      item: {
        id: number;
        title: string;
        content: string;
      };
      edit: boolean;
    }>
  >;
}

export interface taskObject {
  [key: number]: boolean;
}
const Task = ({
  setTodoTitleValue,
  setTodoContentValue,
  setEditTask,
  todoEdit,
  setTodoEdit,
}: ITask) => {
  const {
    minimizeTask,
    minimizeTaskToggler,
    todoItems,
    setTodoItems,
    deleteTodo,
    setCompeletedTodo,
    theme,
    searchText,
  } = useContext(TodoContext) || {};
  const [filteredTodoItems, setFilteredTodoItems] = useState<ITodoItems[]>([]);

  const completedTodoHandler = (id: number) => {
    const completedTodo = todoItems!.find((todo) => todo.id === id);

    if (completedTodo) {
      setCompeletedTodo &&
        setCompeletedTodo((prevCompletedTodo) => [
          ...prevCompletedTodo,
          completedTodo,
        ]);

      const updatedTodoItems = todoItems!.filter((todo) => todo.id !== id);

      setTodoItems && setTodoItems(updatedTodoItems);
      localStorage.setItem("todoItems", JSON.stringify(updatedTodoItems));

      const completedTodos = JSON.parse(
        localStorage.getItem("completedTodoItems") || "[]"
      );

      completedTodos.push(completedTodo);
      localStorage.setItem(
        "completedTodoItems",
        JSON.stringify(completedTodos)
      );
    }
  };

  useEffect(() => {
    const filteredItems = todoItems!.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText!.toLowerCase()) ||
        item.content.toLowerCase().includes(searchText!.toLowerCase())
    );
    setFilteredTodoItems(filteredItems);
  }, [todoItems, searchText]);

  const editTodo = (item: ITodoItems) => {
    setTodoEdit({
      item,
      edit: true,
    });
  };

  useEffect(() => {
    if (todoEdit.edit === true) {
      setTodoTitleValue(todoEdit.item.title);
      setTodoContentValue(todoEdit.item.content);
    }
  }, [todoEdit]);

  return (
    <>
      {filteredTodoItems.map((todoItem) => {
        return (
          <div
            className={`w-[335px] ${
              minimizeTask && minimizeTask[todoItem.id]
                ? "h-[172px]"
                : "h-[101px]"
            }  bg-task-background-color dark:bg-dark-todo pb-[12px] px-[20px] rounded-[12px] task-container flex flex-col justify-between p-[12px] mb-2`}
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
                <div className="w-[311px] h-[54px] task-content px-[12px] py-[8px] bg-background-color dark:bg-slate-300">
                  {todoItem.content}
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="me-2">
                  <EditIcon
                    onClick={() => {
                      editTodo(todoItem);
                      setEditTask(true);
                    }}
                  />
                </div>
                <DeleteIcon
                  onClick={() => deleteTodo && deleteTodo(todoItem.id)}
                />
              </div>
              <div className="flex items-center">
                <div className="me-2 mb-[2px] custom-text-sm-light dark:text-white">
                  Mark completed
                </div>
                <CompletedIcon
                  fill={`${theme === "dark" ? "#116D6E" : "#3DCB65"}`}
                  onClick={() => completedTodoHandler(todoItem.id)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Task;
