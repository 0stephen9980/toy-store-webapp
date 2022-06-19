import { ImageSliderComponent } from "../../components/ImageSliderComponent";
import { CartState } from "../../hooks/Context";

export const Home = () => {
  // Need to add a ref at the top level to handle the scroll events
  const { state } = CartState();
  return (
    <div className="w-full min-h-[100vh]">
      <ImageSliderComponent />
    </div>
  );
};
