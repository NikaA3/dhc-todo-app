import { useContext } from "react";
import userIcon from "../../assets/Frame 41045.svg";
import SettingsIcon from "../../assets/SettingsIcon";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import TodoContext from "../../context/TodoContext";

const UserArea = () => {
  const { theme } = useContext(TodoContext) || {};
  return (
    <div className="flex justify-between items-center padding-medium">
      <div className="flex items-center">
        <img src={userIcon} alt="user-icon" />
        <div className="ms-2 custom-text dark:text-white-color">
          James Ronald
        </div>
      </div>
      <div className="flex">
        <ThemeSwitch />
        <SettingsIcon fill={`${theme === "dark" ? "#116D6E" : "#6A6CE0"} `} />
      </div>
    </div>
  );
};

export default UserArea;
