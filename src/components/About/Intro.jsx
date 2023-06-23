import { Link } from "react-router-dom";
import myImage from "../../assets/My Photo.jpg";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
function Intro() {
  const ThemeSelected = sessionStorage.getItem("CurrentTheme");
  const Skills = [
    { name: "HTML", lvl: 4.5 },
    { name: "CSS", lvl: 4 },
    { name: "Tailwind", lvl: 4 },
    { name: "Javascript", lvl: 4 },
    { name: "React", lvl: 4 },
    { name: "Redux-toolkit", lvl: 4 },
    { name: "Figma", lvl: 4 },
    { name: "MongoDB", lvl: 2 },
    { name: "Express", lvl: 2 },
    { name: "NodeJs", lvl: 2 },
    { name: "User Interface Design", lvl: 3.5 },
    { name: "After Effects", lvl: 4.5 },
  ];

  return (
    <>
      <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-20 px-10 h-[100vh]">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -150 },
          }}
          className="text-4xl font-bold"
        >
          <span className="purple-text">/</span>about
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "linear" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="mt-10 flex gap-12 items-center"
        >
          <img src={myImage} className="w-28 rounded-full filter grayscale" />
          <div className="flex gap-2">
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
                    ? "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
                    : ThemeSelected === "Light"
                    ? "text-[#141414] hover:text-[#a829f1] scale-125"
                    : "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
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
                    ? "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
                    : ThemeSelected === "Light"
                    ? "text-[#141414] hover:text-[#a829f1] scale-125"
                    : "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
                }
              />
            </Link>
            <Link
              onClick={() =>
                window.open("https://www.instagram.com/imdarsh_7/")
              }
              className="text-sm font-semibold leading-6"
            >
              <SocialIcon
                network="instagram"
                fgColor="currentColor"
                bgColor="transparent"
                className={
                  ThemeSelected === null
                    ? "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
                    : ThemeSelected === "Light"
                    ? "text-[#141414] hover:text-[#a829f1] scale-125"
                    : "text-[#f5f5f5] hover:text-[#a829f1] scale-125"
                }
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2, ease: "linear" }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="my-10 text-2xl"
        >
          <p>
            I&apos;m <span className="purple-text">Darsh Shah</span>,
            23-year-old frontend developer from India, holding a bachelor&apos;s
            degree in computer engineering. With more than year of experience in
            Frontend Development.
            <br />
            <br />
            As a creative and experienced Frontend Engineer, I bring a unique
            combination of technical skills, design expertise, and a passion for
            visual effects to the table. I am constantly seeking to expand my
            skill set and learning and exploring new technologies, and keen to
            dive into blockchain development in my next role. My ability to
            deliver visually stunning and user-friendly designs, combined with
            my eagerness to learn, make me a valuable asset to any team.
          </p>
        </motion.div>
        <div className="mt-5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.3, ease: "linear" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -150 },
            }}
            className="text-4xl font-bold"
          >
            <span className="purple-text">/</span>skills
          </motion.h1>
          <div className="flex flex-wrap gap-6 mt-10 lg:max-w-[60%] justify-center lg:justify-start md:justify-start">
            {Skills.map((data, index) => (
              <>
                <motion.button
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: `1.${index}`, ease: "linear" }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -150 },
                  }}
                  key={index}
                  className="skills px-10 py-3.5 hover:px-16 hover:text-white"
                  name="skillBtn"
                  value=""
                  onMouseOver={() =>
                    (document.getElementsByName("skillBtn")[
                      index
                    ].innerHTML = `${data.lvl}/5`)
                  }
                  onMouseLeave={() =>
                    (document.getElementsByName("skillBtn")[
                      index
                    ].innerHTML = `${data.name}`)
                  }
                >
                  {data.name}
                </motion.button>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
