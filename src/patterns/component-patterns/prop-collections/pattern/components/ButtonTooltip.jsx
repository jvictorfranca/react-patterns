import { useState } from "react";
import Tooltip from "./Tooltip";

// A simple, standalone tooltip implementation attached to a <button>.
const ButtonTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // position: relative so the absolutely positioned tooltip is positioned
    <div style={{ position: "relative", display: "inline-block", marginRight: "2rem" }}>
      <Tooltip>
        {({ isVisible, getTriggerProps, getTooltipProps }) => (
          <>
            {/* Trigger element: button */}
            <button
              {...getTriggerProps({
                style: { padding: "8px 16px" },
              })}
            >
              Hover me
            </button>

            {/* Tooltip content */}
            {isVisible && (
              <span
                {...getTooltipProps({
                  style: { left: "120px", top: "0" },
                })}
              >
                I am a tooltip 🎉
              </span>
            )}
          </>  
        )}
      </Tooltip>
    </div>
  );
};

export default ButtonTooltip;