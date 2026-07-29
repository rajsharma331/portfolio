import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    {name:"About", href:"#about"},
    {name:"Skills", href:"#skills"},
    {name:"Journey", href:"#journey"},
    {name:"Projects", href:"#projects"},
    {name:"Contact", href:"#contact"},
  ];


  return (
    <nav className="
    fixed top-0 left-0 w-full
    bg-slate-950/80
    backdrop-blur-lg
    border-b border-slate-800
    z-50
    ">

      <div className="
      max-w-6xl mx-auto
      flex justify-between items-center
      px-6 py-5
      ">


        {/* Logo */}

        <a
          href="#hero"
          className="
          text-2xl font-bold
          tracking-wide
          hover:text-cyan-400
          transition
          "
        >
          Raj<span className="text-cyan-400">.</span>
        </a>



        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          {
            links.map((link,index)=>(

              <a
                key={index}
                href={link.href}
                className="
                text-gray-400
                hover:text-cyan-400
                transition
                "
              >
                {link.name}
              </a>

            ))
          }


          <a
            href="/resume.pdf"
            download
            className="
            bg-cyan-400
            text-slate-900
            px-5 py-2
            rounded-full
            font-semibold
            hover:scale-105
            transition
            "
          >
            Resume
          </a>


        </div>



        {/* Mobile Button */}

        <button
          className="md:hidden text-xl"
          onClick={()=>setOpen(!open)}
        >
          {
            open ? <FaTimes/> : <FaBars/>
          }

        </button>


      </div>



      {/* Mobile Menu */}

      {
        open && (

          <div className="
          md:hidden
          px-6 pb-6
          flex flex-col gap-5
          ">


            {
              links.map((link,index)=>(

                <a
                  key={index}
                  href={link.href}
                  onClick={()=>setOpen(false)}
                  className="
                  text-gray-400
                  hover:text-cyan-400
                  "
                >
                  {link.name}
                </a>

              ))
            }


            <a
              href="/resume.pdf"
              download
              className="
              bg-cyan-400
              text-slate-900
              px-5 py-2
              rounded-full
              text-center
              font-semibold
              "
            >
              Resume
            </a>


          </div>

        )
      }


    </nav>
  );
}

export default Navbar;