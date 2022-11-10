import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
} from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import logo from "../../logo.png";

const Header = () => {
  const { user, providerSignOut } = useContext(AuthContext);
  /*---------- Handle Sign Out ----------*/
  const handleSignOut = () => {
    providerSignOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <>
      <Navbar className="" fluid={true} rounded={false}>
        <Navbar.Brand>
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <Link to="/">PhotographyLux</Link>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              user?.uid ? (
                <Avatar
                  alt="User settings"
                  status="online"
                  img={user?.photoURL}
                  rounded={true}
                />
              ) : (
                <Avatar rounded={true} />
              )
            }
          >
            <Dropdown.Header>
              {user?.displayName ? (
                <span className="block text-sm">{user?.displayName}</span>
              ) : (
                <span className="block text-sm">Anonymous</span>
              )}
              {user?.email ? (
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              ) : (
                <span className="block truncate text-sm font-medium">
                  anonymous@anonymous.com
                </span>
              )}
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>My Reviwes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
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
          <Navbar.Link>
            <Link to="/all_services">Services</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/my_reviews">My Reviews</Link>
          </Navbar.Link>

          {user?.uid ? (
            <>
              <Navbar.Link>
                <Link to="/add_services">Add Services</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/blogs">Blogs</Link>
              </Navbar.Link>
              <Navbar.Link>
                <button onClick={handleSignOut}>Log Out</button>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to="/login">Log In</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/signup">Sign Up</Link>
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
