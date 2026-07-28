import blob from "../assets/blob_back.png";
import members from "../assets/com_mem.png";
import workPeople from "../assets/people_working_updated.mp4";

const WorkSection = () => {
  return (
    <section className="container mx-auto">
      <div className="mt-40 flex justify-between items-center">
        <h1 className="font-jakarta font-semibold leading-[1.1] text-[54px]">
          Provide the best service with <br /> out of the box ideas
        </h1>

        <p className="font-jakarta text-gray-600 text-[18px]">
          we are a passionate team of digital marketing enthusiasts dedicated to{" "}
          <br />
          helping businesses succeed in the digital world. With years of
          experience <br />
          and a deep understanding of the ever-evolving online landscape, we
          stay <br />
          at the forefront of industry trends and technologies.
        </p>
      </div>
      <div className="mt-20 flex gap-20 items-center">
        {/* Stats card */}
        <div className="relative w-[538px] h-[482px] rounded-4xl bg-black overflow-hidden px-5">
          {/* blob image, positioned behind content */}
          <img
            src={blob}
            alt=""
            className="absolute -bottom-1 -right-20 w-[600px] h-[482px] pointer-events-none select-none"
          />

          <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
            <div className="flex items-center gap-3">
              <h1 className="font-jakarta font-bold text-[84px]">920</h1>
              <span className="text-[84px] font-bold font-jakarta">+</span>
            </div>
            <p className="mb-10">Project finish with superbly</p>
            <img src={members} alt="" className="mt-10" />
          </div>
        </div>

        {/* Video card */}
        <div className="relative w-[1192px]">
          <div className="relative h-[482px] rounded-2xl overflow-hidden bg-gray-300">
            <video
              src={workPeople}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-40"
            />

            {/* centered overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-semibold tracking-[0.3em] uppercase">
                How we work
              </span>
            </div>
          </div>

          {/* play button, overlapping bottom-right corner of the card */}
          <button
            aria-label="Play video"
            className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-lime-400 ring-8 ring-white
                 flex items-center justify-center shadow-lg hover:bg-lime-500 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-black translate-x-[2px]"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
