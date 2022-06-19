import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating(props) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const Stars = Array(5).fill(0);

  const [currentValue, setCurretValue] = useState(
    props.value ? props.value : 0
  );
  const [hoverValue, setHoverValue] = useState(undefined);

  //Need to handle for a review part
  const handleClick = (value) => {
    if (currentValue == value) {
      setCurretValue(0);
      props.handleRatingValue(0);
    } else {
      setCurretValue(value);
      props.handleRatingValue(value);
    }
  };

  const handleMouseHover = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className={props.className}>
      {Stars.map((_, index) => (
        <div className={props.IsEditMode ? "px-2" : ""} key={index}>
          {props.IsEditMode ? (
            <FaStar
              name={props.name}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              size={30}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseHover(index + 1)}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <FaStar
              name={props.name}
              color={currentValue > index ? colors.orange : colors.grey}
              size={20}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Rating;
