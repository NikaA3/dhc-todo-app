interface ICloseIcon {
  onClick?: () => void;
}

const CloseIcon = ({ onClick }: ICloseIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onClick={onClick}
    >
      <g id="material-symbols:close">
        <path
          id="Vector"
          d="M5.33341 15.8334L4.16675 14.6667L8.83342 10.0001L4.16675 5.33341L5.33341 4.16675L10.0001 8.83342L14.6667 4.16675L15.8334 5.33341L11.1667 10.0001L15.8334 14.6667L14.6667 15.8334L10.0001 11.1667L5.33341 15.8334Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export default CloseIcon;
