import React from "react";
import GigBox from "./GigBox";
import ResponsiveGigBox from "./ResponsiveGigBox";

const GigPricing = () => {
  return (
    <>
      <div className={"gigPricing_section"}>
        <div className={"box gigPricing-box-1"}>
          <div className={"price"}>Price</div>
          <div>Delivery Time</div>
          <div className={"offer"}>Details you are offering</div>
          <div className={"revisions"}>Revisions</div>
        </div>
        <div className={"gigPricing_section_pricing"}>
          {pricing.map((data) => {
            return <GigBox data={data} />;
          })}
          <ResponsiveGigBox
            data={{
              id: 1,
              title: "Basic",
              active: true,
            }}
          />
        </div>
      </div>
      <div className={"formData-btn gig-pricing-btn"}>
        <button className={"submit-btn"}>Continue</button>
      </div>
    </>
  );
};
export default GigPricing;

const pricing = [
  {
    id: 1,
    title: "Basic",
    active: true,
  },
  {
    id: 2,
    title: "Pro",
    active: false,
  },
  {
    id: 3,
    title: "Ultimate",
    active: false,
  },
];
