import React, { useEffect, useRef } from "react";

import { Col, Row } from "reactstrap";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import SectionTwoSVG from "assets/images/landing-page/section-2.svg";
import { isMobileByWatchMedia } from "ultis/helper";
import Image from "components/Image";
import { EXTERNAL_LINK } from "constants/theme";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const svgRef = useRef(null);

  const isMobile = isMobileByWatchMedia();

  useEffect(() => {
    if (!svgRef.current) return;

    ScrollTrigger.batch(svgRef.current, {
      interval: 0.5,
      onEnter: (batch) => gsap.from(batch, { rotation: "+=360" }),
      onEnterBack: (batch) => gsap.from(batch, { rotation: "+=360" }),
    });
  }, [svgRef.current]);

  return (
    <Row className="vh-100-header bg-primary position-relative z-index-2">
      <Col
        xs={12}
        md={4}
        className="py-5 px-3 d-flex justify-content-end align-items-center"
      >
        <Image
          refs={svgRef}
          src={SectionTwoSVG}
          className="img-fluid"
          alt="section-2"
        />
      </Col>
      <Col
        xs={12}
        md={8}
        className="mb-4 d-flex flex-column vh-100-header justify-content-between text-white px-4p"
      >
        <div className="flex-1 d-flex flex-column-reverse">
          <p className="font-weight-bold mb-4">Team of unique combination</p>
        </div>
        <div className="flex-2 d-flex flex-column">
          <div className="flex-1">
            <h5 className="h1">Global{isMobile ? <br /> : " "}Intelligence</h5>

            <h5 className="h1">Asian Insights</h5>

            <h5 className="h1 mb-4">Local Experience</h5>
          </div>

          <div className="flex-1 border-md-left border-white px-0 px-md-5">
            <p className="mt-3">
              We transform intelligent insights into innovative, relevant
              investment opportunities for our clients. Leveraging our unique
              combination of a global perspective complemented by our Asian DNA,
              we aspire to create sophisticated and diverse solutions that set
              new standards in the asset management industry.
            </p>

            <Button
              variant="text"
              color="info"
              className="text-none px-0 font-weight-bold mt-2 no-hover"
              href={EXTERNAL_LINK.GOOGLE}
            >
              <div className="d-flex align-items-center w-100 justify-content-between">
                <div>Learn more about what makes us unique</div>
                <div className="circle-right mx-2 text-white border-white">
                  <div className="w-10" />
                  <div>&gt;</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SectionTwo;
