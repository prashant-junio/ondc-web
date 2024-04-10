import React from "react";
import "./header.scss";
import { AddressBar } from "../address-bar/address-bar";

export const Header = () => {
  return (
    <div className="header-container">
      <AddressBar  overrideStyles={{containerClass: "margin_bottom_28"}}/>
    </div>
  );
};
