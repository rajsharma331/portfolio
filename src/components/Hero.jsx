import profile from "../assets/raj.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-20">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-cyan-400 mb-3">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Raj Sharma
          </h1>

          <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "Java & Backend Developer",
    2000,
    "AI/ML Enthusiast",
    2000,
    "Problem Solver",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-4"
/>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
            Computer Science Engineering student focused on backend
development, artificial intelligence, and building
real-world software solutions through clean code and
continuous learning.



          </p>
          <div className="
inline-flex items-center gap-2
px-4 py-2
rounded-full
bg-green-500/10
text-green-400
text-sm
mb-6
">
  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
  Available for internships
</div>


          <div className="flex gap-4 mt-8">

            <a
  href="/resume.pdf"
  download
  className="bg-cyan-500 text-black px-6 py-3 rounded-lg hover:bg-cyan-400 transition"
>
  Download Resume
</a>

            <button
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="border border-gray-700 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
>
  View Projects
</button>

          </div>


          <div className="flex gap-5 mt-8 text-2xl text-gray-400">

  <a
    href="https://github.com/rajsharma331"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub className="cursor-pointer hover:text-white transition duration-300" />
  </a>

  <a
    href="https://www.linkedin.com/in/raj-s-b5b85b189/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin className="cursor-pointer hover:text-cyan-400 transition duration-300" />
  </a>

</div>


        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <div className="relative group">

  <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-2xl group-hover:bg-cyan-400/30 transition duration-500"></div>

  <img
    src={profile}
    alt="Raj Sharma"
    className="relative w-80 h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl transition duration-500 group-hover:scale-105"
  />

</div>

        </motion.div>


      </div>

    </section>
  );
}

export default Hero;