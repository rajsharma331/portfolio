import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Linux",
    icon: <FaLinux />,
  },
];


function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-cyan-400 transition"
            >

              <div className="text-3xl text-cyan-400">
                {skill.icon}
              </div>

              <p className="text-gray-300">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;