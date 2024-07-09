import { motion } from "framer-motion";

function Experiance() {
  const MY_EXP = [
    {
      cmpName: "Aurkei",
      position: "Blockchain Developer",
      duration: "May 2024 - Present",
      timeDiff: "",
      type: "Full-Time",
      cmt: [
        "Developing Aurkoin (ARK) token with comprehensive Token design and tokenomics.",
        "Designing and implementing secure smart contracts for Aurkie.",
        "Leading backend development for Aurkie Mobile App with blockchain integration.",
        "Conducting in-depth research on Real World Asset (RWA) tokenization for blockchain integration, producing actionable insights.",
      ],
    },
    {
      cmpName: "George Brown College",
      position: "Research Lead",
      duration: "Apr 2024 - Present",
      timeDiff: "",
      type: "Part-Time",
      cmt: [
        "Led comprehensive research on RWA tokenization in blockchain.",
        "Analyzed and interpreted trends in blockchain technology.",
        "Authored a detailed research paper on project findings.",
        "Engaged with industry experts for insights and validation.",
        "Coordinated team efforts to meet project deadlines.",
        "Organized and led team meetings to ensure progress.",
        "Maintained project documentation and reports.",
        "Explored innovative applications of RWA tokenization",
      ],
    },
    {
      cmpName: "Aeropres India Private Limited",
      position: "Full Stack Developer",
      duration: "Jun 2022 - Jun 2023",
      timeDiff: "1 yr 1 mo",
      type: "Full-Time",
      cmt: [
        "Spearheaded front-end innovation across Moramba, BreathEasy, and SilverlineNFT projects.",
        "Achieved a remarkable performance boost in Moramba with React.js interfaces.",
        "Enhanced project efficiency through rigorous code quality enhancements.",
        "•Crafted captivating UI/UX solutions, driving BreathEasy to the forefront of healthcare technology, and made significant contributions to a prestigious NFT Marketplace project using React, Web3.js, and EtherJS expertise.",
      ],
    },
    {
      cmpName: "InfoLabz",
      position: "Web Developer",
      duration: "Jan 2022 - Apr 2022",
      timeDiff: "4 mos",
      type: "Internship",
      cmt: [
        "Led the development of HealthX, an IoT-based health monitoring system, during internship tenure.",
        "Utilized IoT devices to capture essential human parameters: Heartbeat, Oxygen Level,Pulse Rate, Temperature, and ECG.",
        "Programmed IoT devices using Arduino IDE for seamless data transmission to the server.",
        "Developed frontend interface with ReactJS for real-time access to health metrics and engineered backend with PHP for robust data management and API creation, ensuring smooth frontend-server communication.",
      ],
    },
    {
      cmpName: "Youtube",
      position: "Content Creator",
      duration: "Mar 2020 - Jan 2022",
      timeDiff: "1 yr 11 mos",
      type: "Self-employed",
      cmt: ["VFX Artist", "Live Streaming"],
    },
  ];
  return (
    <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-0 px-10 mb-96">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -150 },
        }}
        className="text-4xl font-bold mb-10"
      >
        <span className="purple-text">/</span>experience
      </motion.h1>
      <hr />
      <div className="mt-4 px-5 flex gap-10 flex-wrap pb-10">
        {MY_EXP.map((data, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: `1.${index}`, ease: "linear" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            key={index}
            className="mt-10 w-[450px] "
          >
            <h4 className="text-base md:text-xl lg:text-2xl font-bold mb-2">
              <span className="purple-text">{"<"}</span>
              {data.position} <span className="purple-text"> /</span>
              <span className="purple-text">{">"}</span>
            </h4>
            <h5 className="text-base md:text-xl lg:text-2xl ps-5 text-gray-400">
              at {data.cmpName}
            </h5>
            <p className="text-sm md:text-lg ps-5 text-gray-400">{data.type}</p>
            <h5 className="text-sm md:text-lg lg:text-lg ps-5 text-gray-400 mt-1">
              {data.duration} <span className="font-bold text-2xl"> · </span>
              {data.timeDiff}
            </h5>
            <ul className="text-sm md:text-lg lg:text-xl ps-5 text-gray-400 mt-1 exprianceDec">
              {data.cmt.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
