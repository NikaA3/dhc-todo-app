interface IEditIconProps {
  onClick?: () => void;
}

const EditIcon = ({ onClick }: IEditIconProps) => {
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
      <g id="fe:edit">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.16659 16.6667H15.8333C16.0543 16.6667 16.2662 16.7545 16.4225 16.9108C16.5788 17.0671 16.6666 17.2791 16.6666 17.5001C16.6666 17.7211 16.5788 17.9331 16.4225 18.0893C16.2662 18.2456 16.0543 18.3334 15.8333 18.3334H4.16659C3.94557 18.3334 3.73361 18.2456 3.57733 18.0893C3.42105 17.9331 3.33325 17.7211 3.33325 17.5001C3.33325 17.2791 3.42105 17.0671 3.57733 16.9108C3.73361 16.7545 3.94557 16.6667 4.16659 16.6667ZM3.33325 12.5001L11.6666 4.16675L14.1666 6.66675L5.83325 15.0001H3.33325V12.5001ZM12.4999 3.33341L14.1666 1.66675L16.6666 4.16675L14.9991 5.83425L12.4999 3.33341Z"
          fill="#372F2F"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
