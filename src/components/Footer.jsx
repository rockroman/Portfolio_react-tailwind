const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div
        id="contact"
        className="bg-gray-900 max-w-screen-xl  px-6 grid gap-12 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-zinc-300 rounded-lg shadow-lg"
      >
        <div className="flex flex-col justify-between">
          <div className="mt-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Lets have a chat!
            </h2>
            <div className="text-blue-700 mt-6">
              Hate forms? Send me an <span className="underline">email</span>{" "}
              instead.
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-6">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-6">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-6">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
