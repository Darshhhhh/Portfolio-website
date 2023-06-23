import { motion } from "framer-motion";
import Netflix from "../../assets/netflixDashboard.png";
import Articlesumm from "../../assets/articalDashboard.png";
import HealthX from "../../assets/HealthXDashboard.png";

function Projects() {
  const MY_PROJECTS = [
    {
      id: 0,
      name: "HealthX",
      skills: ["React", "MongoDB", "Express", "API Development", "Tailwind"],
      link: "https://healthx.vercel.app/",
      gitlink: "https://github.com/Darshhhhh/Healthyfy-2.0-React",
      logo: HealthX,
      dec: "IoT based Remote Health Monitoring System For the measurement of bodily variables such the ECG, temperature, pulse rate, and oxygen level, it offers a solution. We are using a variety of sensors to collect data on human bodily characteristics.",
    },
    {
      id: 1,
      name: "Article Summarizer",
      skills: ["React", "REST APIs", "Tailwind"],
      link: "https://ai-article-summarizer-free.vercel.app/",
      gitlink: "https://github.com/Darshhhhh/Article-summarizer",
      logo: Articlesumm,
      dec: "Our AI-powered article summarizer tool is perfect for professionals, academics, and researchers because it can swiftly and simply summarise lengthy articles with a few clicks!",
    },
    {
      id: 2,
      name: "Netflix-clone",
      skills: ["React", "Firebase", "REST APIs"],
      link: "https://netflix-clone-92bcb.web.app/",
      gitlink: "https://github.com/Darshhhhh/Netflix-clone-ReactJs",
      logo: Netflix,
      dec: "Just a Fun project to Re-create Netflix with 3rd Party APIs.",
    },
  ];

  return (
    <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-10 px-10 h-max snap-start">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -150 },
        }}
        className="text-4xl font-bold mb-10 mt-10"
      >
        <span className="purple-text">/</span>projects
      </motion.h1>
      <hr />
      <div className=" flex flex-wrap justify-start gap-10 lg:justify-between md:justify-between">
        {MY_PROJECTS.map((data, idx) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: `1.${idx}`, ease: "linear" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: idx % 2 == 0 ? 100 : -100 },
            }}
            key={idx}
            className="w-screen flex flex-wrap ustify-start gap-10 lg:justify-between md:justify-between items-center border-b-[1px] border-[#5f5f5fb9] py-10"
          >
            <div className="flex flex-wrap justify-start gap-6 ">
              <div className="overflow-hidden bg-cover bg-no-repeat hover:cursor-pointer rounded-lg">
                <img
                  src={data.logo}
                  alt="ProjectImage"
                  className="w-56 md:w-80 aspect-video transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">{data.name}</h3>
                <p className="w-[300px] md:w-[600px] lg:[650px] text-gray-400">
                  {data.dec}
                </p>
                <div className="flex gap-5 mt-6 flex-wrap w-[80%] lg:w-[100%]">
                  {data.skills.map((e, i) => (
                    <button className="ProjectSkills px-5 py-2" key={i}>
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <button
                className="text-xl font-bold flex gap-2 items-center"
                onClick={() => window.open(data.link)}
              >
                <i>Live Demo</i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#a829f1"
                  className="w-5 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
