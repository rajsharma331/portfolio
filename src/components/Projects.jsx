import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Based Attendance System",
    status: "In Progress",
    description:
      "A smart attendance system using face recognition and automation. Exploring computer vision, TensorFlow Lite, Raspberry Pi, and real-time tracking.",
    tech: ["Python", "OpenCV", "TensorFlow Lite", "Raspberry Pi", "Flask"],
    github: "",
    demo: "",
  },

  {
    title: "QR Certificate Verification System",
    status: "In Progress",
    description:
      "A certificate verification platform using QR codes to improve authenticity and simplify certificate validation.",
    tech: ["React", "Node.js", "MongoDB", "QR Code"],
    github: "",
    demo: "",
  },

  {
    title: "Personal Developer Portfolio",
    status: "Building",
    description:
      "A modern responsive portfolio website showcasing my skills, projects, and development journey.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "",
    demo: "",
  },
];


function Projects() {
  return (
    <section
      id="projects"
      className="py-24 max-w-6xl mx-auto px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold mb-10">
          Projects
        </h2>


        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="
              bg-slate-900 
              border border-gray-800 
              rounded-xl 
              p-6
              hover:border-cyan-400
              transition
              "
            >

              <div className="flex justify-between items-center">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <span className="text-sm text-cyan-400">
                  {project.status}
                </span>

              </div>


              <p className="text-gray-400 mt-4 leading-relaxed">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mt-5">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="
                    px-3 py-1
                    text-sm
                    rounded-full
                    bg-slate-800
                    text-gray-300
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>


              <div className="flex gap-4 mt-6">

                <button
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-slate-800
                  text-gray-300
                  hover:text-white
                  "
                >
                  <FaGithub />
                  Code
                </button>


                <button
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-cyan-500
                  text-black
                  hover:bg-cyan-400
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </button>

              </div>


            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;