import { ReactNode, createContext, useState } from "react";
import { ITodoItems } from "../App";
import { taskObject } from "../components/Task/Task";

interface TodoContextProps {
  children: ReactNode;
}

interface todoContextValue {
  completedTodo: ITodoItems[];
  setCompeletedTodo: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
  minimizeTask: taskObject;
  setMinimizeTask: React.Dispatch<React.SetStateAction<taskObject>>;
  minimizeTaskToggler: (taskId: number) => void;
  todoItems: ITodoItems[];
  setTodoItems: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
  deleteTodo: (id: number) => void;
  activePage: number | null;
  setActivePage: React.Dispatch<React.SetStateAction<number | null>>;
}
export const TodoContext = createContext<todoContextValue | undefined>(
  undefined
);

export const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [completedTodo, setCompeletedTodo] = useState<ITodoItems[]>([]);
  const [minimizeTask, setMinimizeTask] = useState<taskObject>({});
  const minimizeTaskToggler = (taskId: number) => {
    setMinimizeTask &&
      setMinimizeTask((prevState) => ({
        ...prevState,
        [taskId]: !prevState[taskId],
      }));
  };
  const [todoItems, setTodoItems] = useState<ITodoItems[]>([]);
  const deleteTodo = (id: number) => {
    const filteredTodos = todoItems!.filter((todo) => todo.id !== id);
    setTodoItems && setTodoItems(filteredTodos);
    localStorage.setItem("todoItems", JSON.stringify(filteredTodos));
  };
  const [activePage, setActivePage] = useState<number | null>(null);

  return (
    <TodoContext.Provider
      value={{
        completedTodo,
        setCompeletedTodo,
        minimizeTask,
        setMinimizeTask,
        minimizeTaskToggler,
        todoItems,
        setTodoItems,
        deleteTodo,
        activePage,
        setActivePage,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
