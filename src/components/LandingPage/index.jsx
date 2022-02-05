import React from "react";

import { Container, Row } from "reactstrap";

import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

const LandingPage = () => {
  return (
    <Container fluid className="nikko-am-container">
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <Row className="py-4 bg-primary" />
    </Container>
  );
};

export default LandingPage;
