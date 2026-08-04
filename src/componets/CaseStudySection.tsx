const CaseStudySection = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="flex justify-between items-center mt-40 p-16 bg-white">
        <div>
          <h1 className="font-jakarta text-5xl font-semibold leading-[1.2]">
            Digital Marketing & SEO <br /> ServicesThat Grow Traffic & <br />{" "}
            Increase Revenue
          </h1>
        </div>

        <div>
          <p className="mt-10 font-jakarta text-gray-500">
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>

          <div className="flex justify-between w-100 items-center mt-10">
            <button className="btn">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
