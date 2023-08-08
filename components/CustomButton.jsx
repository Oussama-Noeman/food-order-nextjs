"use client";

const CustomButton = ({ title, containerStyles, handleClick }) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
