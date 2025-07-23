import { motion } from "framer-motion";
import Resume from "../../assets/Darsh-2025.pdf";
import Header from "../Header/Header";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function About() {
  const ThemeSelected = sessionStorage.getItem("CurrentTheme");

  const SendEmail = () => {
    var subject = "Let's Connect!";
    var body = "Hello,I'm [Your Name]!,would love to have chat with you!";
    window.location.href = `mailto:contact.shahdarsh@gmail.com?subject=${subject}&body=${body}`;
  };
  const [text] = useTypewriter({
    words: ["Web3, Research, Frontend🚀.."],
    loop: 1,
    delaySpeed: 1000,
    typeSpeed: 150,
  });
  const dowloadResume = () => {
    var url = Resume;
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <main>
      <Header />
      <div className="relative mx-auto max-w-[100rem] pt-44 md:pt-56 lg:pt-64 px-10 h-screen">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="text-3xl font-bold md:text-3xl lg:text-7xl "
        >
          Software Engineer |&nbsp;
          {/* <span className="underline decoration-yellow-200">Web3 </span> */}
          <span className="purple-text underline decoration-yellow-200">
            {text}
            <Cursor
              cursorColor={
                ThemeSelected === null
                  ? "#FFF"
                  : ThemeSelected === "Dark"
                  ? "#FFF"
                  : "#000"
              }
            />
          </span>
        </motion.h1>
        {/* <h5 className="text-xl font-light md:text-lg lg:text-2xl mb-10 ">
          Blockchain | Web3 | Crypto
        </h5> */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="text-base md:text-xl lg:text-2xl max-w-[100rem] mt-5 font-light"
        >
          who brewing pixel-perfect spells and conjuring captivating user
          experiences with a touch of code sorcer✨.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="mt-6 flex gap-10 text-xs md:text-xl lg:text-xl font-semibold"
        >
          <button
            className="roundedBtn uppercase py-2 px-3 md:px-10 md:py-5 lg:px-12 lg:py-5"
            onClick={() => SendEmail()}
          >
            Contact Me
          </button>
          <button
            className="uppercase flex gap-2 align-middle items-center"
            onClick={() => dowloadResume()}
          >
            <i>Download Resume</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default About;
