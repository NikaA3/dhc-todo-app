import AddTaskIcon from "../../assets/AddTaskIcon";

const AddTaskButton = () => {
  return (
    <div className="add-task-wrapper w-[52px] h-[52px] rounded-[50px] bg-button-background-color dark:bg-dark-icon flex justify-center items-center cursor-pointer">
      <AddTaskIcon />
    </div>
  );
};

export default AddTaskButton;
