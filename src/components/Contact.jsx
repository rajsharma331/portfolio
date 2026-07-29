import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rtdx1lt",
        "template_8om5ckk",
        form.current,
        {
          publicKey: "u4pcnDvNFQYTa8Ww8",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };


  return (
    <section
      id="contact"
      className="py-24 max-w-6xl mx-auto px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold mb-4">
          Let's Connect
        </h2>


        <p className="text-gray-400 max-w-xl">
          I'm open to internships, collaborations, and
          opportunities where I can build impactful software.
        </p>



        <div className="
        mt-10
        grid
        md:grid-cols-2
        gap-8
        ">


          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="
            bg-slate-900
            border border-gray-800
            rounded-xl
            p-8
            space-y-5
            "
          >

            <h3 className="text-xl font-semibold">
              Send a Message
            </h3>


            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="
              w-full
              bg-slate-800
              border border-gray-700
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-cyan-400
              "
            />


            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="
              w-full
              bg-slate-800
              border border-gray-700
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-cyan-400
              "
            />


            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="
              w-full
              bg-slate-800
              border border-gray-700
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-cyan-400
              "
            />


            <button
              type="submit"
              className="
              bg-cyan-400
              text-slate-950
              px-6 py-3
              rounded-lg
              font-semibold
              hover:bg-cyan-300
              transition
              "
            >
              Send Message
            </button>


          </form>




          {/* Developer Card */}

          <div
            className="
            bg-slate-900
            border border-gray-800
            rounded-xl
            p-8
            flex
            flex-col
            justify-center
            "
          >


            <div
              className="
              w-16
              h-16
              rounded-full
              bg-cyan-400/20
              flex
              items-center
              justify-center
              text-3xl
              mb-5
              "
            >
              💻
            </div>



            <h3 className="text-2xl font-bold">
              Raj Sharma
            </h3>


            <p className="text-cyan-400 mt-2">
              B.Tech CSE Student
            </p>


            <p className="text-gray-400 mt-4 leading-relaxed">
              Passionate about software development,
              backend engineering, AI, and building
              real-world applications.
            </p>



            <div className="
            flex
            gap-6
            mt-8
            text-3xl
            ">


              <a
                href="https://github.com/rajsharma331"
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-gray-400
                hover:text-white
                hover:scale-110
                transition
                "
              >
                <FaGithub />
              </a>



              <a
                href="https://www.linkedin.com/in/raj-s-b5b85b189/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-gray-400
                hover:text-cyan-400
                hover:scale-110
                transition
                "
              >
                <FaLinkedin />
              </a>


            </div>



            <div
              className="
              mt-8
              bg-green-500/10
              text-green-400
              px-4
              py-3
              rounded-lg
              text-sm
              "
            >
              🟢 Available for internships & collaborations
            </div>


          </div>


        </div>


      </motion.div>


    </section>
  );
}

export default Contact;