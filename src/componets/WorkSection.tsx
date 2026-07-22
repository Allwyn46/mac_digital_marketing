import blob from "../assets/blob_back.png";
import members from "../assets/com_mem.png";

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
      <div className="mt-20 flex justify-between items-center">
        <div className="relative w-[438px] h-[382px] rounded-4xl bg-black overflow-hidden px-5">
          {/* blob image, positioned behind content */}
          <img
            src={blob}
            alt=""
            className="absolute -bottom-1 -right-20 w-[600px] h-[382px] pointer-events-none select-none"
          />

          <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
            <div className="flex items-center gap-3">
              <h1 className="font-jakarta font-bold text-[84px]">920</h1>
              <span className="text-[84px] font-bold font-jakarta">+</span>
            </div>
            <p className=" mb-10">Project finish with superbly</p>
            <img src={members} alt="" className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
