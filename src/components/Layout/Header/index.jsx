import React, { useCallback, useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import LOGO from "assets/images/header/Logo.png";
import TOGGLE from "assets/images/header/toggle.svg";
import SEARCH from "assets/images/header/search.svg";
import Image from "components/Image";
import { isMobileByWatchMedia } from "ultis/helper";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const isMobile = isMobileByWatchMedia();

  const renderMenus = () => (
    <>
      <div>
        <Image src={SEARCH} alt="search" className="mx-2 mx-xl-5" />
        <NavbarToggler onClick={toggleNavbar} className="navbar-toggler mx-2">
          <Image src={TOGGLE} alt="toggle" />
        </NavbarToggler>
      </div>
      <Collapse navbar isOpen={!collapsed}>
        <Nav className="me-auto" navbar>
          <NavItem className="mx-3">
            <NavLink className="text-dark">About us</NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink className="text-dark">Sustainability</NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink className="text-dark">Insights & News</NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink className="text-dark">Strategies</NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink className="text-dark">Funds</NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink className="text-dark">How to Invest</NavLink>
          </NavItem>

          <UncontrolledDropdown inNavbar nav disabled className="not-allowed">
            <DropdownToggle caret nav>
              Singapore&nbsp;
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </>
  );

  const toggleNavbar = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Navbar
      className="navbar pt-42px pt-md-0 fixed-top bg-white"
      expand="md"
      light
    >
      <NavbarBrand href="/" className="ml-2 ml-xxl-5p">
        <Image src={LOGO} alt="nikko-am" />
      </NavbarBrand>
      {!isMobile ? (
        <div className="d-flex align-items-center flex-row-reverse mr-xxl-5p">
          {renderMenus()}
        </div>
      ) : (
        renderMenus()
      )}
    </Navbar>
  );
};

export default Header;
