import './App.css'

function App() {

  return (
    <>
      <section className='flex justify-center items-center bg-[#17181d] h-screen'>
        <div className="flex flex-col justify-center items-center">
          <h1 className='text-anton text-white text-[300px] text-center mt-25'>PORTFOLIO</h1>
          <img src="me.png" alt="" className='w-[400px] -mt-70' />
        </div>
      </section>

      <section className='bg-[#17181d] h-screen'>
        <h1 className='text-anton text-white text-[250px] text-center'>ABOUT ME</h1>
        <div className="text-white text-2xl px-52 text-justify">
          <p>Hi, I'm Hasan Ahmad Halibah. I'm a recent graduate in Software Engineering (class of 2025) with a strong passion for web development and UI/UX Design. I enjoy turning ideas into real, user-friendly websites using technologies.</p>
          <br />
          <p>This portfolio is my way of sharing what I’ve created and how I’ve grown as a developer. I’m always open to learning more, collaborating with others, and building something impactful. Thanks for visiting my portfolio. Let’s connect and create something great together!</p>
        </div>
      </section>

      <section className='bg-[#17181d] h-screen'>
        <h1 className='text-white text-anton text-[220px] text-center'>MY SERVICE</h1>
        <div className="flex flex-row px-50 gap-10">
          <div className="flex flex-col gap-10">
            <div className="text-white">
              <h1 className='text-2xl'>Web Development</h1>
              <p className='mt-5'>I develop responsive and easy-to-use websites that adapt well to different screen sizes. The goal is to make websites that look good, load fast, and are simple to navigate. I work with attention to structure, layout, and user experience.</p>
            </div>

            <div className="text-white">
              <h1 className='text-2xl'>UI/UX Design</h1>
              <p className='mt-5'>I design simple and user-friendly interfaces that focus on clarity and ease of use. Each design is made to help users interact naturally and comfortably, whether on mobile or desktop.</p>
            </div>
          </div>

          <div className="-mt-5">
            <img src="service.png" alt="" className='w-[1000px]' />
          </div>
        </div>
      </section>

      <section className='bg-[#17181d] h-auto pb-20'>
        <div className="text-anton text-[250px] text-center text-white">MY SKILLS</div>
        <div className="flex flex-row gap-13 px-48 justify-center items-center">
          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm transition duration-300">
                Expert
              </span>
            </div>
            <p className="text-white mt-3">HTML</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className="text-white mt-2 text-sm transition duration-300">
                Expert
              </span>
            </div>
            <p className="text-white mt-3">CSS</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className="text-white mt-2 text-sm transition duration-300">
                Intermediate
              </span>
            </div>
            <p className="text-white mt-3">Java Script</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" />
              <span className="text-white mt-2 text-sm transition duration-300">
                Intermediate
              </span>
            </div>
            <p className="text-white mt-3">PHP</p>
          </div>
        </div>

        <div className="flex flex-row gap-13 px-48 justify-center items-center mt-15">
          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm transition duration-300">Expert</span>
            </div>
            <p className="text-white mt-3">Bootstrap</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm transition duration-300">Expert</span>
            </div>
            <p className="text-white mt-3">Tailwind</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm transition duration-300">Beginner</span>
            </div>
            <p className="text-white mt-3">React JS</p>
          </div>

          <div className="flex flex-col text-center group">
            <div className="bg-[#e0e0e4]/25 w-50 h-50 p-10 rounded-3xl flex flex-col justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                className="w-auto grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm transition duration-300">Intermediate</span>
            </div>
            <p className="text-white mt-3">Laravel</p>
          </div>
        </div>
      </section>

      <section className='h-auto w-full bg-[#17181d]'>
          <h1 className='text-anton text-white text-[165px] text-center'>Recent Project</h1>

          <div className="flex gap-20">
            <img src="" alt="" />
            <img src="" alt="" />
            <div className="flex justify-between">
              <p></p>
              <a href=""></a>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
