import './App.css'

function App() {

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-[#17181d] px-4">
        <div className="flex flex-col justify-center items-center relative w-full">
          {/* Gambar di HP duluan */}
          <img
            src="me.png"
            alt="Me"
            className="block lg:hidden w-full max-w-sm sm:max-w-md mx-auto -mb-12 sm:-mb-16 z-10"
          />

          {/* Teks Portfolio */}
          <h1 className="text-anton  text-[60px] sm:text-[100px] md:text-[160px] lg:text-[250px] xl:text-[330px] text-center leading-none md:z-0 z-10 md:mt-24 mt-0">
            PORTFOLIO
          </h1>

          {/* Gambar niban di layar besar */}
          <img
            src="me.png"
            alt="Me"
            className="hidden lg:block w-[300px] xl:w-[400px] -mt-40 md:z-10 z-0"
          />
        </div>
      </section>

      <section className='h-screen'>
        <h1 className='text-anton  text-[250px] text-center'>ABOUT ME</h1>
        <div className=" text-2xl px-52 text-justify">
          <p>Hi, I'm Hasan Ahmad Halibah. I'm a recent graduate in Software Engineering (class of 2025) with a strong passion for web development and UI/UX Design. I enjoy turning ideas into real, user-friendly websites using technologies.</p>
          <br />
          <p>This portfolio is my way of sharing what I’ve created and how I’ve grown as a developer. I’m always open to learning more, collaborating with others, and building something impactful. Thanks for visiting my portfolio. Let’s connect and create something great together!</p>
        </div>
      </section>

      <section className="min-h-screen flex items-center px-10 py-16">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16">

          {/* Kiri: Judul */}
          <div className="flex-1 ">
            <h1 className="text-anton text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[220px] leading-none text-center lg:text-left">
              MY<br />SERVICE
            </h1>
          </div>

          {/* Kanan: Deskripsi layanan */}
          <div className="flex-1 space-y-12 text-[#e0e0e0] text-lg">
            <div>
              <h2 className="text-2xl font-semibold ">Web Development</h2>
              <p className="mt-4">
                I develop responsive and easy-to-use websites that adapt well to different screen sizes.
                The goal is to make websites that look good, load fast, and are simple to navigate.
                I work with attention to structure, layout, and user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold ">UI/UX Design</h2>
              <p className="mt-4">
                I design simple and user-friendly interfaces that focus on clarity and ease of use.
                Each design is made to help users interact naturally and comfortably, whether on mobile or desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='h-auto pb-20'>
        <div className="text-anton text-[250px] text-center ">MY SKILLS</div>
        <div className="flex flex-row gap-13 px-48 justify-center items-center">
          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className=" mt-2 text-sm transition duration-300">
                Expert
              </span>
            </div>
            <p className=" mt-3">HTML</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className=" mt-2 text-sm transition duration-300">
                Expert
              </span>
            </div>
            <p className=" mt-3">CSS</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className=" mt-2 text-sm transition duration-300">
                Intermediate
              </span>
            </div>
            <p className=" mt-3">Java Script</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className=" mt-2 text-sm transition duration-300">
                Intermediate
              </span>
            </div>
            <p className=" mt-3">PHP</p>
          </div>
        </div>

        <div className="flex flex-row gap-13 px-48 justify-center items-center mt-15">
          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className=" mt-2 text-sm transition duration-300">Expert</span>
            </div>
            <p className=" mt-3">Bootstrap</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className=" mt-2 text-sm transition duration-300">Expert</span>
            </div>
            <p className=" mt-3">Tailwind</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className=" mt-2 text-sm transition duration-300">Beginner</span>
            </div>
            <p className=" mt-3">React JS</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className=" mt-2 text-sm transition duration-300">Intermediate</span>
            </div>
            <p className=" mt-3">Laravel</p>
          </div>
        </div>
      </section>

      <section className='h-auto w-full '>
        <h1 className='text-anton  text-[165px] text-center'>Recent Project</h1>
      </section>
    </>
  )
}

export default App
