import { motion } from "framer-motion";

function Experiance() {
  const MY_EXP = [
    {
      cmpName: "Aeropres India Private Limited",
      position: "Frontend Developer",
      duration: "Jun 2022 - Jun 2023",
      timeDiff: "1 yr 1 mo",
      type: "Full-Time",
      cmt: [
        "Responsible to Develope and Manage large Scale Client Side Web Appliactions",
        "Developed Multiple Fetures for EMS Systems Named Moramba.",
        "Created Highly Engaging User Interface Designs for multiple Web Appliactions.",
      ],
    },
    {
      cmpName: "InfoLabz",
      position: "Web Developer",
      duration: "Jan 2022 - Apr 2022",
      timeDiff: "4 mos",
      type: "Internship",
      cmt: [
        "Gethered Knowlage about React and Other client Side Technologies.",
        "Developed Health Care Tool with Combination of IoT and React to solve problems in healthcare department.",
      ],
    },
    {
      cmpName: "InfoLabz",
      position: "Android Developer",
      duration: "Apr 2021 - May 2021",
      timeDiff: "2 mos",
      type: "Internship",
      cmt: [
        "Learn about Native Technologies like Flutter,ReactNative & Dart.",
        "Developed basic understaning about Native platfom ecosystem for development.",
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
    <div className="mx-auto max-w-[100rem] pt-10 md:pt-10 lg:pt-10 px-10 snap-start mb-96">
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
      <div className="mt-4 px-5 flex gap-10 flex-wrap">
        {MY_EXP.map((data, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: `1.${index}`, ease: "linear" }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            key={index}
            className="mt-10 w-[450px]"
          >
            <h4 className="text-2xl font-bold mb-2">
              <span className="purple-text">{"<"}</span>
              {data.position} <span className="purple-text"> /</span>
              <span className="purple-text">{">"}</span>
            </h4>
            <h5 className="text-xl ps-5 text-gray-400">at {data.cmpName}</h5>
            <p className="text-sm ps-5 text-gray-400">{data.type}</p>
            <h5 className="text-md ps-5 text-gray-400 mt-1">
              {data.duration} <span className="font-bold text-2xl"> · </span>
              {data.timeDiff}
            </h5>
            <ul className="text-md ps-5 text-gray-400 mt-1 exprianceDec">
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
