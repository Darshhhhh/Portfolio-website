import { motion } from "framer-motion";

function Experiance() {
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
        className="text-4xl font-bold mb-10"
      >
        <span className="purple-text">/</span>experiance
      </motion.h1>
      <div className="mt-10">

      </div>
    </div>
  );
}

export default Experiance;
