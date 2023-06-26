import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LightHeaderBrandIcon from "../../assets/light-logo-2.png";
import DarkHeaderBrandIcon from "../../assets/Dark-logo-2.png";
import ChnageTheme from "../../utils/ChangeTheme";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [Theme, SetTheme] = useState(false); //false = Light Theme || True = Dark
  const ThemeChanged = () => {
    let CurrentTheme = Theme ? "Dark" : "Light";
    ChnageTheme(CurrentTheme);
  };
  const ThemeSelected = sessionStorage.getItem("CurrentTheme");
  const SendEmail = () => {
    var subject = "Let's Connect!";
    var body = "Hello,I'm [Your Name]!,would love to have chat with you!";
    window.location.href = `mailto:contact.shahdarsh@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <header className="headerMainBox ">
      <nav
        className="flex max-w-[100rem] items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -150},
          }}
          className="flex lg:flex-1"
        >
          <Link to={"/"} className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto md:hidden lg:hidden"
              src={
                ThemeSelected === null
                  ? DarkHeaderBrandIcon
                  : ThemeSelected === "Light"
                  ? LightHeaderBrandIcon
                  : DarkHeaderBrandIcon
              }
              alt="Brand-Logo"
            />
          </Link>
          <h1 className="text-3xl font-extrabold max-sm:hidden max-md:hidden">
            <span className="purple-text me-1 text-4xl">/</span>darsh
          </h1>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 150 },
          }}
          className="hidden lg:flex lg:gap-x-5"
        >
          <Link
            onClick={() => window.open("https://linkedin.com/in/darsh-shahx")}
            className="text-sm font-semibold leading-6"
          >
            <SocialIcon
              network="linkedin"
              fgColor="currentColor"
              bgColor="transparent"
              className={
                ThemeSelected === null
                  ? "text-[#f5f5f5] hover:text-[#a829f1]"
                  : ThemeSelected === "Light"
                  ? "text-[#141414] hover:text-[#a829f1]"
                  : "text-[#f5f5f5] hover:text-[#a829f1]"
              }
            />
          </Link>
          <Link
            onClick={() => window.open("https://github.com/Darshhhhh")}
            className="text-sm font-semibold leading-6"
          >
            <SocialIcon
              network="github"
              fgColor="currentColor"
              bgColor="transparent"
              className={
                ThemeSelected === null
                  ? "text-[#f5f5f5] hover:text-[#a829f1]"
                  : ThemeSelected === "Light"
                  ? "text-[#141414] hover:text-[#a829f1]"
                  : "text-[#f5f5f5] hover:text-[#a829f1]"
              }
            />
          </Link>
          <Link
            onClick={() => SendEmail()}
            className="text-sm font-semibold leading-6"
          >
            <SocialIcon
              network="email"
              fgColor="currentColor"
              bgColor="transparent"
              className={
                ThemeSelected === null
                  ? "text-[#f5f5f5] hover:text-[#a829f1]"
                  : ThemeSelected === "Light"
                  ? "text-[#141414] hover:text-[#a829f1]"
                  : "text-[#f5f5f5] hover:text-[#a829f1]"
              }
            />
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={() => [SetTheme(!Theme), ThemeChanged()]}
              className="px-2 py-1 rounded-md"
            >
              {Theme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </div>
        </motion.div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-3 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Darshhhhh</span>
              <img
                className="h-12 w-auto"
                src={LightHeaderBrandIcon}
                alt="My-logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  onClick={() =>
                    window.open("https://linkedin.com/in/darsh-shahx")
                  }
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <SocialIcon
                    network="linkedin"
                    bgColor="transparent"
                    fgColor="#141414"
                    className="me-2"
                  />
                  LinkedIn
                </Link>
                <Link
                  onClick={() => window.open("https://github.com/Darshhhhh")}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <SocialIcon
                    network="github"
                    bgColor="transparent"
                    fgColor="#141414"
                    className="me-2"
                  />
                  GitHub
                </Link>
              </div>
              <div className="py-2">
                <Link
                  onClick={() => SendEmail()}
                  className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  <SocialIcon
                    network="email"
                    bgColor="transparent"
                    fgColor="#141414"
                    className="me-2"
                  />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
