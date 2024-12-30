import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto flex justify-between items-center py-6 px-0">
      {/* Empty Div for Left Alignment */}
      <div></div>

      {/* Navigation Links and Social Icons */}
      <div className="flex items-center space-x-8 text-gray-300">
        {/* Navigation Links */}
        <nav className="flex space-x-10">
          <a href="#home" className="hover:text-white transition duration-300">Home</a>
          <a href="#projects" className="hover:text-white transition duration-300">Projects</a>
          <a href="#about" className="hover:text-white transition duration-300">About</a>
          <a href="#contact" className="hover:text-white transition duration-300">Contacts</a>
        </nav>

        {/* Separator */}
        <span className="text-gray-500">|</span>

        {/* Social Icons */}
        <div className="flex items-center space-x-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-300 hover:text-white"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.587v-2.17c-3.338.725-4.043-1.413-4.043-1.413-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.203.084 1.836 1.235 1.836 1.235 1.07 1.834 2.805 1.304 3.49.997.107-.774.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.005-.322 3.3 1.23a11.475 11.475 0 013.003-.404c1.018.005 2.04.138 3.003.404 2.293-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.608-2.807 5.625-5.478 5.921.43.372.823 1.102.823 2.222v3.293c0 .324.22.702.825.584C20.565 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-300 hover:text-white"
            >
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.73V1.73C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM20.452 20.452h-3.56v-5.724c0-1.364-.028-3.116-1.898-3.116-1.9 0-2.19 1.48-2.19 3.014v5.826h-3.56V9h3.422v1.56h.05c.477-.902 1.638-1.852 3.373-1.852 3.606 0 4.272 2.372 4.272 5.458v6.286z" />
            </svg>
          </a>
        </div>
      </div>
    </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col md:flex-row items-center px-8 mt-20">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 text-lg uppercase tracking-wide mb-2">Hi, I’m Fahmi</p>
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="block">I’M A</span>
            <span className="block text-white">MOBILE</span>
            <span className="block text-white">DEVELOPER</span>
          </h1>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
            ac aliquet odio mattis.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
            {/* Get In Touch Button */}
            <a
              href="#contact"
              className="bg-white text-gray-900 py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 text-lg font-semibold"
            >
              Get In Touch
            </a>
            {/* Download CV Button */}
            <a
              href="/cv.pdf"
              download
              className="border border-white text-white py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-300 text-lg font-semibold"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end items-start mt-[-40px] md:mt-[-40px] pr-8">
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
