import { useState } from "react";
import Tooltip from "./Tooltip";

// Another standalone tooltip implementation, this time attached to an <img>.
const ImageTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // position: relative so the absolutely positioned tooltip is positioned
    <div style={{ position: "relative", display: "inline-block", marginRight: "2rem" }}>
      <Tooltip>
        {({ isVisible, getTriggerProps, getTooltipProps }) => (
          <>
            {/* Trigger element: image */}
            <img
              {...getTriggerProps({
                src:"/cat.jpg",
                width:"100",
                alt: "Cute kitten",
                style: { borderRadius: "8px", cursor: "pointer", display: "block" },
              })}
            />

            {/* Tooltip content */}
            {isVisible && (
              <span
                {...getTooltipProps({
                  style: { left: "120px", top: "0" },
                })}
              >
                A very cute kitten 🐱
              </span>
            )}
          </>    
        )}  
      </Tooltip>
    </div>
  );
};

export default ImageTooltip;