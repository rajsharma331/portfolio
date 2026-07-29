import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <div className="max-w-3xl text-gray-400 leading-relaxed space-y-4">

          <p>
            I'm Raj Sharma, a Computer Science Engineering student
            passionate about building software and solving real-world problems.
          </p>

          <p>
            My interests include full-stack development, backend systems,
            artificial intelligence, and creating practical projects that
            combine technology with real-life solutions.
          </p>

          <p>
            Currently, I am improving my skills in Java, Python, React,
            Data Structures & Algorithms, and modern development tools.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default About;