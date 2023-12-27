import userIcon from "../../assets/Frame 41045.svg";
import SettingsIcon from "../../assets/SettingsIcon";

const UserArea = () => {
  return (
    <div className="flex justify-between items-center padding-medium">
      <div className="flex items-center">
        <img src={userIcon} alt="user-icon" />
        <div className="ms-2 custom-text">James Ronald</div>
      </div>
      <div>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default UserArea;
