import { ImageSliderComponent } from "../../components/ImageSliderComponent";
import Categories from "../Categories/Categories";

export const Home = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <div>
        <ImageSliderComponent />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
};
