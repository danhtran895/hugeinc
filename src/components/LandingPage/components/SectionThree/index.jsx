import React, { useEffect, useMemo, useRef, useState } from "react";

import { Tab, Tabs } from "@mui/material";
import { Col, Container, Row } from "reactstrap";
import gsap from "gsap";

import { isMobileByWatchMedia } from "ultis/helper";

import TabFour from "./TabFour";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTwo from "./TabTwo";

const TabPanel = (props) => {
  const { children, value, index, refs, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div ref={refs} className="d-flex flex-column justify-content-between">
          {children}
        </div>
      )}
    </div>
  );
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const SectionThree = () => {
  const [value, setValue] = useState(0);
  const svgRef = useRef(null);

  const isMobile = isMobileByWatchMedia();

  const sectionThreeTitle = useMemo(
    () => (
      <>
        <h1 className="h1 mt-5">Our Featured</h1>
        <h1 className="h1">Funds</h1>
      </>
    ),
    [],
  );

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    if (isMobile) {
      gsap.fromTo(
        svgRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
        },
      );
      return;
    }
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
  }, [svgRef.current]);

  return (
    <Row className="vh-100-header position-relative z-index-2 bg-white-5">
      {isMobile && (
        <Col xs={12} className="px-4">
          {sectionThreeTitle}
        </Col>
      )}
      <Col xs={12}>
        <Container fluid className="px-0">
          <Row>
            <Col xs={12} md={4}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="my-4"
                orientation={isMobile ? "horizontal" : "vertical"}
              >
                <Tab label="01" className="display-3" {...a11yProps(0)} />
                <Tab label="02" className="display-3" {...a11yProps(1)} />
                <Tab label="03" className="display-3" {...a11yProps(2)} />
                <Tab label="04" className="display-3" {...a11yProps(3)} />
              </Tabs>
            </Col>

            <Col xs={12} md={8} className="px-4p">
              <TabPanel refs={svgRef} value={value} index={0}>
                <TabOne />
              </TabPanel>
              <TabPanel refs={svgRef} value={value} index={1}>
                <TabTwo />
              </TabPanel>
              <TabPanel refs={svgRef} value={value} index={2}>
                <TabThree />
              </TabPanel>
              <TabPanel refs={svgRef} value={value} index={3}>
                <TabFour />
              </TabPanel>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default SectionThree;
