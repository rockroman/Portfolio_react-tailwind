import { links } from "../data";

const Navbar = () => {
  return (
    <section className="bg-gray-900 ">
      <nav className="  align-element bg-gray-900 shadow-md flex flex-wrap items-center  py-8 ">
        <div className="flex-1 flex justify-between items-center ">
          <a href="/" className="flex text-lg font-semibold">
            <h2 className="text-3xl font-bold text-blue-700 text-start">
              Software <span className="text-zinc-200">Dev</span>
            </h2>
          </a>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="text-xl text-center items-center gap-x-5 py-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <li key={id} className="py-2 lg:py-0 ">
                    <a
                      href={href}
                      className="capitalize text-zinc-300 hover:pb-4 hover:border-b-4 hover:border-blue-700"
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
