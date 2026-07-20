import { TrafficCard } from "./TrafficCard";
import arc from "../assets/arc.png";
import trending from "../assets/trending.png";
import progress from "../assets/progress.png";

const HeroRight = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-5 flex justify-between items-center space-x-8">
        <div className="relative">
          <img src={arc} alt="arc" className="w-[400px] h-[400px]" />
          <img
            src={trending}
            alt="trending"
            className="absolute top-[-55px] right-0 w-[200px] h-auto"
          />
        </div>

        <div className="w-[400px] h-[400px] bg-[#F0F0F0] rounded-xl p-5 text-start">
          <h1 className="text-[95px] font-bold font-jakarta">230+</h1>

          <p className="font-jakarta text-gray-600 text-[20px]">
            some big companies that <br /> we work with, and trust us <br />{" "}
            very much
          </p>

          <img
            src={progress}
            alt="progress"
            className="object-contain p-4 w-[600px] h-[200px]"
          />
        </div>
      </div>
      <div>
        <TrafficCard />
      </div>
    </div>
  );
};

export default HeroRight;
