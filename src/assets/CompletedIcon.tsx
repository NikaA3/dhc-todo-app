interface ICompletedIcon {
  onClick?: () => void;
  fill?: string;
}

const CompletedIcon = ({ onClick, fill }: ICompletedIcon) => {
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
      <g id="Group">
        <path
          id="Vector"
          d="M10.0001 18.3334C11.0946 18.3348 12.1787 18.1199 13.1899 17.7011C14.2012 17.2822 15.1196 16.6676 15.8926 15.8926C16.6676 15.1196 17.2822 14.2012 17.7011 13.1899C18.1199 12.1787 18.3348 11.0946 18.3334 10.0001C18.3348 8.90554 18.1199 7.8215 17.701 6.81027C17.2821 5.79904 16.6676 4.88055 15.8926 4.10759C15.1196 3.3326 14.2012 2.718 13.1899 2.29912C12.1787 1.88024 11.0946 1.66534 10.0001 1.66676C8.90554 1.66536 7.8215 1.88028 6.81027 2.29916C5.79904 2.71804 4.88055 3.33262 4.10759 4.10759C3.33262 4.88055 2.71804 5.79904 2.29916 6.81027C1.88028 7.8215 1.66536 8.90554 1.66676 10.0001C1.66534 11.0946 1.88024 12.1787 2.29912 13.1899C2.718 14.2012 3.3326 15.1196 4.10759 15.8926C4.88055 16.6676 5.79904 17.2821 6.81027 17.701C7.8215 18.1199 8.90554 18.3348 10.0001 18.3334Z"
          stroke={fill}
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.66675 10L9.16675 12.5L14.1667 7.5"
          stroke={fill}
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CompletedIcon;
