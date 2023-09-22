import { useRef, useState } from "react";
import { links } from "../data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  //  add style to links container based on height of links while using useRef and
  //  getBoundingClientRect() method
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="bg-gray-900 ">
      <div className="nav-center bg-gray-900 align-element">
        <div className="nav-header flex items-baseline justify-between p-3 ">
          <a href="/" className="flex text-lg font-semibold">
            <h2 className="text-3xl font-bold text-blue-700 text-start">
              Software <span className="text-zinc-200">Dev</span>
            </h2>
          </a>
          <button className="nav-toggle text-zinc-200" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* <div
          className={
            showLinks ? "links-container show-container" : "links-container"
          }
        > */}
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links text-xl py-3 gap-x-5 " ref={linksRef}>
            {links.map((link) => {
              const { id, href, text } = link;

              return (
                <li key={id} className="py-2">
                  <a
                    href={href}
                    className="capitalize text-zinc-300 hover:pb-1 hover:border-b-4 hover:border-blue-700"
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
