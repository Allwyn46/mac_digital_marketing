import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="container">
      <nav className="flex justify-between items-center py-4 text-gray-800">
        <div className="flex justify-between items-center space-x-24">
          <img src={logo} alt="Logo" className="h-8" />
          <ul className="flex space-x-8">
            <li className="mr-8 font-semibold text-[14px] font-jakarta cursor-pointer">
              Service
            </li>
            <li className="mr-8 font-semibold text-[14px] font-jakarta cursor-pointer">
              Agency
            </li>
            <li className="mr-8 font-semibold text-[14px] font-jakarta cursor-pointer">
              Case Study
            </li>
            <li className="mr-8 font-semibold text-[14px] font-jakarta cursor-pointer">
              Resources
            </li>
            <li className="mr-8 font-semibold text-[14px] font-jakarta cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <button className="btn">Get Started</button>

          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-bell-icon lucide-bell svgIcon"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
