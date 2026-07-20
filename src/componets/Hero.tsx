import CallToAction from "./CallToAction";
import companies from "../assets/companies.png";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="container flex justify-between items-center py-4 px-8 text-gray-800 font-jakarta">
      <div className="mt-14">
        <h1 className="text-[92px] leading-[1.1] font-semibold mb-4">
          Stay ahead of the <br /> curve with our <br /> forward-thinking
        </h1>

        <p className="text-[18px] text-gray-500 mt-16 leading-normal mb-16">
          An award-winning SEO agency with disciplines in digital marketing,{" "}
          <br /> design, and website development. focused on understanding you.
        </p>

        <div className="flex justify-start items-center space-x-12">
          <CallToAction />

          <div>
            <p className="underline text-[16px] cursor-pointer">
              View Case Study
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center space-x-32 mt-16">
          <p className="text-[16px] font-semibold">
            Trusted by the world's <br /> biggest brands
          </p>

          <img src={companies} alt="Companies" />
        </div>
      </div>

      <div>
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
