interface ISaveButton {
  title?: string;
  onClick?: () => void;
}

const SaveButton = ({ title, onClick }: ISaveButton) => {
  return (
    <button
      type="button"
      className="w-[311px] h-[34px]
		 bg-button-background-color text-button
			rounded
		 "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SaveButton;
