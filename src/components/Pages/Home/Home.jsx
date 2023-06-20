import ItemPreview from "./ItemPreview/ItemPreview";
import Team from "./Team/Team";
import Discover from "./Discover/Discover";

export const HomePage = () => {
  return (
    <div>
      <ItemPreview />
      <Discover />
      <Team />
    </div>
  );
};
