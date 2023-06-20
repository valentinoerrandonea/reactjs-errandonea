import { AccCards } from "./Products/AccCards";
import ClothingCards from "./Products/ClothingCards";
import { BrowseProducts } from "./Products/BrowseProducts";

export const Products = () => {
  return (
    <div>
      <BrowseProducts />
      <ClothingCards />
      <AccCards />
    </div>
  );
};
