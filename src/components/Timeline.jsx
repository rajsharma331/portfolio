import { motion } from "framer-motion";

const journey = [
  {
    year: "2024",
    title: "Started B.Tech CSE",
    description:
      "Began my journey into Computer Science and learned programming fundamentals.",
  },
  {
    year: "2025",
    title: "Built Programming Foundation",
    description:
      "Learned C, C++, Java, OOP and improved problem-solving skills.",
  },
  {
    year: "2026",
    title: "Learning Full Stack Development",
    description:
      "Currently exploring React, Node.js, MongoDB and modern web development.",
  },
  {
    year: "Present",
    title: "Building Real Projects",
    description:
      "Creating AI applications, portfolio projects and preparing for software engineering internships.",
  },
];

function Timeline() {
  return (
    <section
      id="journey"
      className="max-w-6xl mx-auto py-28 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        My Journey
      </h2>

      <div className="relative border-l-2 border-cyan-500">

        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative ml-8 mb-14"
          >

            <div className="absolute -left-11 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950"></div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition">

              <span className="text-cyan-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Timeline;