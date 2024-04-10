import * as React from "react";
import { Header } from "../components/header/header";
import { SearchField } from "../components/search-field/search-field";
import { ProductCategories } from "../components/product-categories/product-categories";
import { HomeBanner } from "../components/home-banner/home-banner";

const Landing = () => {
  return (
    <div>
      <div className="margin_right_24 margin_left_24 margin_top_24">
        <Header />
        <SearchField overrideStyles={{ containerClass: "margin_bottom_57" }} />
      </div>
      <ProductCategories
        overrideStyles={{ containerClass: "margin_left_24 margin_bottom_40" }}
        categories={[
          { label: "Grocery & Essentials" },
          { label: "Eggs, Meat & Fish" },
          { label: "Fruits & Vegetables" },
          { label: "Dry Fruits & Nuts" },
        ]}
      />
      <div className="margin_right_24 margin_left_24">
        <HomeBanner overrideStyles={{ containerClass: "margin_bottom_40" }} />
        <NearbyOutlets />
      </div>
    </div>
  );
};

export default Landing;
