import { useContext, useEffect, useState } from "react";
import "./App.css";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import CreateTask from "./components/AddTaskContainer/CreateTask";
import SearchBar from "./components/SearchBar/SearchBar";
import Task from "./components/Task/Task";
import TaskNavBar from "./components/TaskNavbar/TaskNavBar";
import UserArea from "./components/UserArea/UserArea";
import EditTask from "./components/EditTask/EditTask";
import { z } from "zod";
import { Route, Routes } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import TodoContext from "./context/TodoContext";

export interface ITodoItems {
  id: number;
  title: string;
  content: string;
}

const todoSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
  })
);

const App = () => {
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const [todoTitleValue, setTodoTitleValue] = useState("");
  const [todoContentValue, setTodoContentValue] = useState("");

  const [todoEdit, setTodoEdit] = useState({
    item: { id: 0, title: "", content: "" },
    edit: false,
  });
  const { todoItems, setTodoItems, activePage } = useContext(TodoContext) || {};

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const addTodo = () => {
    const newTodo: ITodoItems = {
      id: generateUniqueId(),
      title: todoTitleValue,
      content: todoContentValue,
    };
    const updatedTodoList = [...todoItems!, newTodo];
    localStorage.setItem("todoItems", JSON.stringify(updatedTodoList));
    setTodoItems && setTodoItems(updatedTodoList);

    setTodoTitleValue("");
    setTodoContentValue("");
  };

  const updateTodo = (id: number, updatedTodo: ITodoItems) => {
    const updTodo = todoItems!.map((todoItem) =>
      todoItem.id === id
        ? {
            ...todoItem,
            ...updatedTodo,
          }
        : todoItem
    );
    setTodoItems && setTodoItems(updTodo);
    localStorage.setItem("todoItems", JSON.stringify(updTodo));
  };

  useEffect(() => {
    const storedTodoItems = JSON.parse(
      localStorage.getItem("todoItems") || "[]"
    );
    const validateStoredTodoItems = todoSchema.safeParse(storedTodoItems);

    if (!validateStoredTodoItems.success) {
      localStorage.removeItem("todoItems");
      return;
    }
    setTodoItems && setTodoItems(validateStoredTodoItems.data);
  }, []);

  return (
    <div className="w-full h-screen bg-background-color dark:bg-dark-gray flex flex-col justify-between">
      <div>
        <UserArea />
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <TaskNavBar />
        <div className="flex flex-col justify-center items-center">
          <Routes>
            {activePage === 1 && (
              <Route
                path="/"
                element={
                  <Task
                    setTodoTitleValue={setTodoTitleValue}
                    setTodoContentValue={setTodoContentValue}
                    editTask={editTask}
                    setEditTask={setEditTask}
                    todoEdit={todoEdit}
                    setTodoEdit={setTodoEdit}
                  />
                }
              />
            )}
            {activePage === 2 && (
              <Route path="/history" element={<HistoryPage />} />
            )}
          </Routes>
          {editTask && (
            <div className="todo-container">
              <EditTask
                editTask={editTask}
                setEditTask={setEditTask}
                todoTitleValue={todoTitleValue}
                setTodoTitleValue={setTodoTitleValue}
                todoContentValue={todoContentValue}
                setTodoContentValue={setTodoContentValue}
                updateTodo={updateTodo}
                todoEdit={todoEdit}
              />
            </div>
          )}

          {addTask && (
            <div className="todo-container">
              <CreateTask
                setAddTask={setAddTask}
                todoTitleValue={todoTitleValue}
                setTodoTitleValue={setTodoTitleValue}
                todoContentValue={todoContentValue}
                setTodoContentValue={setTodoContentValue}
                addTodo={addTodo}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className="flex justify-center pb-[11px] "
        onClick={() => setAddTask(true)}
      >
        <AddTaskButton />
      </div>
    </div>
  );
};

export default App;
