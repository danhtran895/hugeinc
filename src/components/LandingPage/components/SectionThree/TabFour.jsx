import React from "react";

import { Button } from "@mui/material";

import Image from "components/Image";
import SectionThree from "assets/images/landing-page/section-3.svg";
import { isMobileByWatchMedia } from "ultis/helper";
import { EXTERNAL_LINK } from "constants/theme";

const TabFour = () => {
  const isMobile = isMobileByWatchMedia();

  const DATA = [
    { label: "NAV (per 100 shares)", value: "¥196,977" },
    { label: "Net Assets", value: "7,309,193 million" },
    { label: "Day Change", value: "- ¥1,094" },
    { label: "Issued", value: "3,710,686,634 shares" },
  ];

  return (
    <>
      {!isMobile && (
        <>
          <h1 className="h1 mt-5">Our Featured</h1>
          <h1 className="h1 mb-4">Funds</h1>
        </>
      )}

      <h1 className="display-6 text-primary mb-0">Nikko AM AK Disriptive</h1>

      <h1 className="display-6 text-primary mb-4">Innovation Fund</h1>

      <div className={`d-flex flex-column${isMobile ? "" : "-reverse"}`}>
        <div className="mt-xl-5">
          {DATA.map((item, index) => (
            <div
              key={item.label}
              className={`border-xxl-top w-xxl-30 py-0 py-xl-2 ${
                index === DATA.length - 1 && "border-xxl-bottom"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-gray mx-2">{item.value}</span>
            </div>
          ))}
        </div>

        <Image
          src={SectionThree}
          className="img-fluid max-w-662"
          alt="section-3"
        />
      </div>

      <Button
        variant="text"
        className="text-none px-0 font-weight-bold my-5 no-hover max-w-fit-content"
        href={EXTERNAL_LINK.GOOGLE}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div>Explore more funds</div>
          <div className="circle-right mx-2">
            <div className="w-10" />
            <div>&gt;</div>
          </div>
        </div>
      </Button>
    </>
  );
};

export default TabFour;
