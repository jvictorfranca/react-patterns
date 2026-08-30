import ButtonTooltip from "./components/ButtonTooltip";
import ImageTooltip from "./components/ImageTooltip";

const PropCollections_Impl = () => {
  return (
    <div>
      <h2>Prop Collections</h2>

      <p>
        Prop Collections is a pattern for grouping and reusing related props
        across components. Instead of passing each prop individually, a
        collection can provide a consistent set of behaviors and attributes
        to different elements.
      </p>

      <p>
        Below are two examples showing how the same approach can be used with
        different types of elements.
      </p>

      {/* Button-based tooltip */}
      <ButtonTooltip />

      {/* Image-based tooltip */}
      <ImageTooltip />
    </div>
  );
};

export default PropCollections_Impl;
