import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function NavLink({ href, title }) {
  return (
    <ScrollLink
      to={href}
      smooth={true}
      duration={500}
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </ScrollLink>
  );
}

export default NavLink;
