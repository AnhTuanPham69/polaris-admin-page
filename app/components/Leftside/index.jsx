import React, { useState } from "react";
import { Link, Icon } from "@shopify/polaris";
import { LEFT_SIDEBAR_ITEMS } from "../../utils/LeftSideItems";

import { HomeIcon } from "@shopify/polaris-icons";
import CardDefault from "../ProductsCard";

const CustomSidebar = () => {
  const [selectedComponent, setSelectedComponent] = useState();

  const handleSelectComponent = (key) => {
    setSelectedComponent(key);
  };
  return (
    <div className="app-container">
      <div class="sidebar">
        <div class="sidebar-top">
          <Icon source={HomeIcon} color="subdued" />
        </div>
        <div class="sidebar-center">
          <ul class="list">
            {LEFT_SIDEBAR_ITEMS.map((item) => (
              <li class="list-item" key={item.id}>
                <div class="pedro">
                  {" "}
                  <Icon source={item.icon} color="subdued" />
                  <span class="pedro1">
                    <Link
                      removeUnderline
                      monochrome
                      onClick={() => handleSelectComponent(item.key)}
                    >
                      {item.name}
                    </Link>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div class="sidebar-bottom">
          <div class="color-box dark"></div>
          <div class="color-box night"></div>
          <div class="color-box light"></div>
        </div>
      </div>

      <div class="content">
        {LEFT_SIDEBAR_ITEMS.map((item) => {
          if (item.key === selectedComponent) {
            return <CardDefault name={item.name} />;
          }
        })}
      </div>
    </div>
  );
};

export default CustomSidebar;
