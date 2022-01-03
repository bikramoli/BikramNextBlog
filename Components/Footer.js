import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin, FiYoutube } from "react-icons/fi";


function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="container mx-auto py-4 px-5 flex-wrap flex-col sm:flex-row md:text-center">
          
          <span className="flex space-x-8 text-xl sm:ml-auto sm:mt-0 justify-center  py-5 ">
            <a
              className="text-gray-50"
              href="https://twitter.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiTwitter />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://github.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
           
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a
              className="ml-4 text-gray-50"
              href="https://www.linkedin.com/in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiYoutube />
            </a>
          </span>
          
          <p className="mx-3 font-bold text-base text-gray-100 md:text-base text-center">
            Digit-Infosys
          </p>
          
          <p className="text-gray-50 text-sm text-center ">
            © {year} Web-Infosys 1.0 —
            <a
              href="https://twitter.com/"
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              @BikramOli
            </a>
            
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
