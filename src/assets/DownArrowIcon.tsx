interface IDropdownIcon {
  onClick?: () => void;
}

const DownArrowIcon = ({ onClick }: IDropdownIcon) => {
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
          d="M15 7.5L10 12.5L5 7.5"
          stroke="#372F2F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default DownArrowIcon;
