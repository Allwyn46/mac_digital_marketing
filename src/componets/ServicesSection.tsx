import blob from "../assets/blob_back.png";
import CallToAction from "./CallToAction";

const ServicesSection = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-40 font-jakarta relative w-[1788px] h-[482px] rounded-4xl bg-black overflow-hidden px-5">
        <img
          src={blob}
          alt=""
          className="absolute -bottom-1 -right-20 w-[800px] h-[482px] pointer-events-none select-none"
        />

        <div className="p-5">
          <h1 className="font-jakarta text-[48px] text-amber-50 z-50 font-semibold text-center">
            Real-world examples of how we have helped companies <br /> achieve
            their marketing objectives.
          </h1>

          <div className="mt-20 flex justify-center gap-20 items-center">
            <button className="btn border-amber-50"></button>
            <CallToAction ButtonTXT="All Work" />
            <CallToAction ButtonTXT="UI/UX Design" />
            <CallToAction ButtonTXT="Digital Marketing" />
            <CallToAction ButtonTXT="Branding" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
