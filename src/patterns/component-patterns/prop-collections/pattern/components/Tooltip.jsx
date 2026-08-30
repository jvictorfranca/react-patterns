import { useState } from "react";

const Tooltip = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // PROP GETTER: Trigger
  const getTriggerProps = (props = {}) => ({
    ...props,
    onMouseEnter: (e) => {
      setIsVisible(true);
      props.onMouseEnter?.(e); // call user-defined handler if present
    },
    onMouseLeave: (e) => {
      setIsVisible(false);
      props.onMouseLeave?.(e);
    },
    "aria-describedby": "tooltip",
    style: { cursor: "pointer", ...props.style },
  });

  // PROP GETTER: Tooltip
  const getTooltipProps = (props = {}) => ({
    ...props,
    id: "tooltip",
    role: "tooltip",
    style: {
      position: "absolute",
      background: "black",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      transform: "translateY(4px)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      zIndex: 99,
      ...props.style,
    },
  });

  // PROP COLLECTION
  const tooltipCollection = {
    isVisible,
    getTriggerProps,
    getTooltipProps,
  };

  return children(tooltipCollection);
};

export default Tooltip;