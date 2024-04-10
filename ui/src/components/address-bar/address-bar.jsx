import React from "react";
import PropTypes from "prop-types";
import "./address-bar.scss";
import { images } from "../../assets/images";

export const AddressBar = ({ overrideStyles }) => {
  return (
    <div
      className={`d-flex flex-row align-items-center justify-content-between address-bar-container ${overrideStyles.containerClass}`}
    >
      <div className="addres-bar-icon-con"></div>
      <p className="font_s_semiBold">110001- Add Address </p>
      <img src={images.CHEVRON_BOTTOM} className="h_24 w_24" />
    </div>
  );
};

AddressBar.propTypes = {
  overrideStyles: PropTypes.object,
};
AddressBar.defaultProps = {
  overrideStyles: {
    containerClass: "",
  },
};
