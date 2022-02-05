import React, { useEffect, useRef } from "react";

import { Col, Row } from "reactstrap";
import { Button } from "@mui/material";
import gsap from "gsap";

import Image from "components/Image";
import { isMobileByWatchMedia } from "ultis/helper";
import SectionOneMobile from "assets/images/landing-page/section-1-mobile.png";
import SectionOnePC from "assets/images/landing-page/section-1-pc.png";
import { EXTERNAL_LINK } from "constants/theme";

const SectionOne = () => {
  const svgRef = useRef(null);

  const isMobile = isMobileByWatchMedia();

  useEffect(() => {
    if (!svgRef.current) return;

    if (isMobile) {
      gsap.fromTo(
        svgRef.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
        },
      );
      return;
    }

    gsap.to(svgRef.current, {
      opacity: 0,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }, [svgRef.current, isMobile]);

  return (
    <Row className="vh-100-header">
      <Col xs={12} md={4} className="px-0">
        <Image
          refs={svgRef}
          src={isMobile ? SectionOneMobile : SectionOnePC}
          className={isMobile ? "" : "section-1-img z-index-1"}
          alt="section-1"
        />
      </Col>

      <Col
        xs={12}
        md={8}
        className="section-1-content mb-4 d-flex flex-column vh-100-header justify-content-between"
      >
        <div className="flex-1" />
        <div className="flex-1 d-flex flex-column">
          <div className="flex-1 mb-md-5">
            <h5 className="h1">Progressive Solutions</h5>
            <h5 className="h1">Competitive Performance</h5>
            <h5 className="h1">
              Global Citizen with{isMobile ? <br /> : " "}Asian DNA
            </h5>
          </div>

          <div className="flex-1 border-md-left border-secondary px-0 px-md-5">
            <p className="text-black-50 h5 mt-3">
              We're one of Asia's largest{isMobile ? <br /> : " "}asset managers
            </p>

            <Button
              variant="text"
              className="text-none px-0 font-weight-bold mt-2 no-hover"
              href={EXTERNAL_LINK.GOOGLE}
            >
              <div className="d-flex align-items-center w-100 justify-content-between">
                <div>Learn more about who we are</div>
                <div className="circle-right mx-2">
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

export default SectionOne;
