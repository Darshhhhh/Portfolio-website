import { Link } from "react-router-dom";
import myImage from "../../assets/My Photo.jpg";
import { SocialIcon } from "react-social-icons";
function Intro() {
  const ThemeSelected = sessionStorage.getItem("CurrentTheme");
  const Skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "MongoDB",
    "Express",
    "NodeJs",
    "Redux-toolkit",
    "Figma",
    "User Interface Design",
    "After Effects",
  ];
  return (
    <>
      <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-20 px-10 h-[100vh]">
        <h1 className="text-4xl font-bold">
          <span className="purple-text">/</span>about
        </h1>
        <div className="mt-10 flex gap-12 items-center">
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
        </div>
        <div className="my-10 text-2xl">
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
        </div>
        <div className="mt-5">
          <h1 className="text-4xl font-bold">
            <span className="purple-text">/</span>skills
          </h1>
          <div className="flex flex-wrap gap-6 mt-10">
            {Skills.map((data, index) => (
              <button key={index} className="skills px-10 py-3.5">
                {data}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
