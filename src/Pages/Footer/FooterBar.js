import { Footer, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../logo.png";

const FooterBar = () => {
  return (
    <>
      <Navbar
       rounded={false}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="#"
              src={logo}
              alt="PhotographyLux Logo"
              name="PhotographyLux"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </Navbar>
    </>
  );
};

export default FooterBar;
