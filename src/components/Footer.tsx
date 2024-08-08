import { FaInstagram } from "react-icons/fa"; // Import Instagram icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:gap-8">
        <div className="text-sm text-white-100">
          &copy; {new Date().getFullYear()} Quiz App. All rights reserved.
        </div>
        <div className="mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/xdcoder.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-500 text-4xl hover:text-gray-400" />
          </a>
        </div>
      </div>
      <p className="text-sm text-white-100 text-center pt-4">
        For any query feel free to contact me at <span className="font-bold">ravishbisht86@gmail.com</span> 
      </p>
    </footer>
  );
};

export default Footer;
