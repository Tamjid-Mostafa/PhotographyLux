import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Header = () => {
  return (
    <>
      <Navbar className="" fluid={true} rounded={false}>
        <Navbar.Brand to="https://flowbite.com/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PhotographyLux
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Flowbite>
              <DarkThemeToggle />
            </Flowbite>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>
          <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link></Navbar.Link>
          <Navbar.Link><Link to="/Services">Services</Link></Navbar.Link>
          <Navbar.Link><Link to="/Pricing">Pricing</Link></Navbar.Link>
          <Navbar.Link><Link to="/Contact">Contact</Link></Navbar.Link>
          <Navbar.Link><Link to="/login">Log In</Link></Navbar.Link>
          <Navbar.Link><Link to="/signup">Sign Up</Link></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
