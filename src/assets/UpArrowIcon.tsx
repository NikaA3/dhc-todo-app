interface IUpArrowIcon {
  onClick?: () => void;
}

const UpArrowIcon = ({ onClick }: IUpArrowIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      onClick={onClick}
      className="cursor-pointer"
    >
      <g id="tabler:chevron-up">
        <path
          id="Vector"
          d="M5 12.5L10 7.5L15 12.5"
          stroke="#372F2F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UpArrowIcon;
