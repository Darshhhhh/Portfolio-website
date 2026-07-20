import { Link } from "react-router-dom";
import myImage from "../../assets/My Photo.jpg";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Intro() {
  const ThemeSelected = sessionStorage.getItem("CurrentTheme");
const SkillCategories = {
  "Frontend Development": [
    { name: "JavaScript", lvl: 4 },
    { name: "React", lvl: 4 },
    { name: "Redux Toolkit", lvl: 4 },
    { name: "Tailwind CSS", lvl: 4 },
    { name: "HTML5", lvl: 4 },
    { name: "CSS3", lvl: 4 },
    { name: "Next.js", lvl: 3 },
    { name: "Framer Motion", lvl: 3 },
    { name: "Three.js", lvl: 2 },
    { name: "shadcn/ui", lvl: 2 },
  ],

  "Backend / Infrastructure": [
    { name: "Node.js", lvl: 3 },
    { name: "Express.js", lvl: 3 },
    { name: "REST APIs", lvl: 3 },
    { name: "API Development", lvl: 3 },
    { name: "MongoDB", lvl: 2.5 },
    { name: "Firebase", lvl: 2 },
    { name: "Firestore", lvl: 2 },
    { name: "Firebase Auth", lvl: 2 },
    { name: "Docker", lvl: 2 },
    { name: "Kubernetes", lvl: 2 },
    { name: "CI/CD (GitHub Actions, Jenkins)", lvl: 2 },
    { name: "GCP", lvl: 2 },
    { name: "Ansible", lvl: 2 },
    { name: "Git", lvl: 3 },
    { name: "Postman", lvl: 2 },
    { name: "JMeter", lvl: 2 },
    { name: "Vercel", lvl: 2 },
  ],

  "Blockchain / Web3": [
    { name: "Technical Research", lvl: 4 },
    { name: "Tokenomics", lvl: 3.5 },
    { name: "Smart Contract Architecture", lvl: 2 },
    { name: "Solidity", lvl: 2 },
    { name: "Ethers.js", lvl: 2 },
    { name: "Web3.js", lvl: 2 },
    { name: "Hardhat", lvl: 2 },
  ],

  "Mobile Development": [
    { name: "React Native", lvl: 2.5 },
    { name: "Android (Kotlin)", lvl: 2 },
    { name: "iOS (Swift)", lvl: 2 },
    { name: "Core Location API", lvl: 2 },
    { name: "Google Maps SDK", lvl: 2 },
  ],

  "UI / Design": [
    { name: "Figma", lvl: 4 },
    { name: "User Interface Design", lvl: 4 },
    { name: "After Effects", lvl: 4 },
    { name: "Lucide-react", lvl: 2 },
  ],

  "Soft Skills": [
    { name: "Team Leadership", lvl: 3 },
    { name: "Agile Development", lvl: 2.5 },
    { name: "Public Speaking", lvl: 2 },
    { name: "Technical Writing", lvl: 3 },
    { name: "Cross-functional Collaboration", lvl: 3 },
    { name: "Research Analysis", lvl: 3 },
  ],
};

  const ColoredText = (TextYouWantToColor) => {
    return <p className="purple-text">{TextYouWantToColor}</p>;
  };

  return (
    <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-20 px-10 mb-10">
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
        className="mt-10 flex gap-5 md:gap-7 lg:gap-12 items-center"
      >
        <img src={myImage} className="w-28 rounded-full filter grayscale" />
        <div className="flex gap-2">
          {["linkedin", "github", "instagram"].map((network) => (
            <Link
              key={network}
              onClick={() =>
                window.open(
                  network === "linkedin"
                    ? "https://linkedin.com/in/darsh-shahx"
                    : network === "github"
                    ? "https://github.com/Darshhhhh"
                    : "https://www.instagram.com/imdarsh_7/"
                )
              }
              className="text-sm font-semibold leading-6"
            >
              <SocialIcon
                network={network}
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
          ))}
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
        className="my-10 text-sm md:text-xl lg:text-2xl"
      >
        <p>
          I&apos;m Darsh Shah👋 — software engineer who enjoys building
          things that make sense—clean UIs, thoughtful systems, and apps people
          actually enjoy using. I care about clarity, performance, and turning
          complex ideas into something simple and usable.
          <br />
          <br />
          What I enjoy: <br />→ designing clean, responsive UIs <br /> →
          building full-stack apps that feel smooth end-to-end <br />→
          experimenting with mobile (Android & iOS) <br /> → exploring
          tokenomics, RWA tokenization & decentralized systems <br />→
          JavaScript, React, Node.js, Web3, Kotlin, Swift <br /> <br /> I
          design, I connect, I ship.
        </p>
      </motion.div>

      <div className="mt-5 lg:mb-56">
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

        {Object.entries(SkillCategories).map(([category, skills], i) => (
          <div key={i} className="mt-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
              {category}
            </h2>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start md:justify-start">
              {skills.map((data, index) => (
                <motion.button
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, ease: "linear" }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -150 },
                  }}
                  className="text-2xl flex"
                >
                  {ColoredText("<")}
                  {data.name}&nbsp;
                  {ColoredText(" />")}
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
