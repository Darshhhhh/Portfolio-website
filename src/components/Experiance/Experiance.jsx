import { motion } from "framer-motion";

function Experiance() {
const MY_EXP = [
  {
    cmpName: "Aurkei Inc.",
    position: "Software Engineer",
    duration: "May 2024 – Aug 2024",
    timeDiff: "4 mos",
    type: "Co-Op",
    cmt: [
      "Built and test-deployed Aurkoin (ERC-20), a secure healthcare-data token.",
      "Designed tokenomics to cap inflation and increase retention; adopted into product roadmap.",
      "Integrated mint, burn, and reward logic into smart contracts, increasing platform transaction activity.",
    ],
  },

  {
    cmpName: "George Brown College",
    position: "Research Lead",
    duration: "Apr 2024 – Aug 2024",
    timeDiff: "5 mos",
    type: "Contract · Part-Time",
    cmt: [
      "Led a 10-member team to deliver a 60-page tokenization framework covering 14 asset classes.",
      "Produced market and regulatory insights across agriculture, real estate, energy, and healthcare.",
      "Secured expert and policymaker approval, positioning the framework for pilot deployment.",
      "Optimized research workflow with weekly sprints, reducing turnaround time by 25%.",
    ],
  },

  {
    cmpName: "Aeropres India Private Limited",
    position: "Full Stack Developer",
    duration: "Jun 2022 – Jun 2023",
    timeDiff: "1 yr 1 mo",
    type: "Full-Time",
    cmt: [
      "Improved Moramba performance by 13% through refactoring, code splitting, and lazy loading.",
      "Rebuilt BreathEasy UI for full tablet and mobile responsiveness, receiving 100% positive tester feedback.",
      "Developed Solidity contracts and wallet integration for SilverlineNFT to enable secure in-house NFT minting.",
      "Delivered cross-functional features across frontend, backend, and blockchain, reducing release cycles by 20%.",
    ],
  },

  {
    cmpName: "Infolabz IT Services",
    position: "Web Developer Intern",
    duration: "Jan 2022 – Apr 2022",
    timeDiff: "4 mos",
    type: "Internship",
    cmt: [
      "Developed HealthX, an IoT vital-sign monitoring MVP using Arduino.",
      "Integrated heart-rate, temperature, pulse, and SpO₂ sensors, streaming real-time data to the cloud.",
      "Built a React dashboard with a PHP/SQL backend for live charts and logs, improving monitoring efficiency by 30%.",
    ],
  },

  {
    cmpName: "YouTube",
    position: "Content Creator",
    duration: "Mar 2020 – Jan 2022",
    timeDiff: "1 yr 11 mos",
    type: "Self-employed",
    cmt: ["Created VFX-based content and operated live-streaming workflows."],
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
            <ul className="text-sm md:text-base lg:text-base ps-5 text-gray-400 mt-1 exprianceDec">
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
