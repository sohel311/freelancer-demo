import React, { useState } from "react";
import Select from "react-select";
import location from "../../../../assets/images/location.svg";

const ResponsiveGigBox = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  const pricing = [
    {
      id: 1,
      title: "Basic",
      active: false,
    },
    {
      id: 2,
      title: "Pro",
      active: false,
    },
    {
      id: 3,
      title: "Ultimate",
      active: true,
    },
  ];

  return (
    <div className="responsive-box">
      <div className="responsive-box_pricing">
        {pricing.map((data) => {
          return (
            <div
              className={`responsive-box_pricing_item ${
                data.active && "active"
              }`}
            >
              {data.title}
            </div>
          );
        })}
      </div>
      <div className={"box gigPricing_box_3"}>
        <div className={"gigPricing_box_3_amount"}>
          <div className="responsive_title">Price</div>
          <input placeholder="Add Amount" />
        </div>
        <div className={"gigPricing_box_3_select_time"}>
          <div className={"select-section"}>
            <div className="responsive_title">Delivery Time</div>
            <Select
              isSearchable={false}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={"Select Time"}
              styles={{
                option: (base) => ({
                  ...base,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                }),
              }}
            />
          </div>
        </div>
        <div className={"gigPricing_box_3_points"}>
          <div className="responsive_title">Details you are offering</div>
          <ul>
            <li>Add point details</li>
            <li>Add point details</li>
            <li>Add point details</li>
            <li>Add point details</li>
            <li>Add point details</li>
          </ul>
        </div>
        <div className={"gigPricing_box_3_select_revision "}>
          <div className={"select-section"}>
          <div className="responsive_title">Revisions</div>
            <Select
              isSearchable={false}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder={"Revision"}
              styles={{
                option: (base) => ({
                  ...base,
                  fontSize: "14px",
                  fontFamily: "Poppins",
                }),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveGigBox;
