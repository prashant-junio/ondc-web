import React from "react";
import PropTypes from "prop-types";
import "./home-banner.scss";

export const HomeBanner = ({ overrideStyles }) => {
  return (
    <div className={`${overrideStyles.containerClass}`}>
      <p className="font_sl_bold margin_bottom_16">Special offers for you</p>
      <div className="homer-banner-container border_radius_12"></div>
    </div>
  );
};

HomeBanner.propTypes = {
  overrideStyles: PropTypes.object,
};
HomeBanner.defaultProps = {
  overrideStyles: {
    containerClass: "",
  },
};
