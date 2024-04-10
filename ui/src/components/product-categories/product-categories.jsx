import React from "react";
import PropTypes from "prop-types";
import "./product-categories.scss";

const Category = ({ overrideStyles, label }) => {
  return (
    <div className={`category_item_container ${overrideStyles.containerClass}`}>
      <div className="category_icon_container border_radius_12 margin_bottom_12"></div>
      <p className="font_s_semiBold text-center">{label}</p>
    </div>
  );
};

Category.propTypes = {
  overrideStyles: PropTypes.object,
};
Category.defaultProps = {
  overrideStyles: {
    containerClass: "",
  },
};

export const ProductCategories = ({ overrideStyles, categories }) => {
  const getCategoriesView = () => {
    return categories.map((category) => (
      <Category
        {...category}
        overrideStyles={{ containerClass: "margin_right_12" }}
      />
    ));
  };
  return (
    <div className={`${overrideStyles.containerClass}`}>
      <p className="font_sl_bold margin_bottom_16">Find store by category</p>
      <div className="d-flex flex-row overflow-scroll hide-scrollbar">{getCategoriesView()}</div>
    </div>
  );
};

ProductCategories.propTypes = {
  overrideStyles: PropTypes.object,
  categories: PropTypes.array,
};
ProductCategories.defaultProps = {
  overrideStyles: {
    containerClass: "",
  },
  categories: [],
};
