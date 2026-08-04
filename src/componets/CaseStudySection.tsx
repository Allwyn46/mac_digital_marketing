import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    accentColor: "#42A5F5",
    buttonVariant: "filled",
    title: "How a Digital Marketing Agency Can Boost Your Business",
    description:
      "We are the top digital marketing agency for branding corp. We offer a full range engine...",
  },
  {
    id: 2,
    accentColor: "#F97316",
    buttonVariant: "outline",
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    description:
      "Working with this digital marketing agency has been a true partnership. They have taken...",
  },
  {
    id: 3,
    accentColor: "#7C3AED",
    buttonVariant: "outline",
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    description:
      "What sets this digital marketing agency apart is their commitment to transparency and...",
  },
];

const CaseStudySection = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="flex justify-between items-center mt-40 p-16">
        <div>
          <h1 className="font-jakarta text-5xl font-semibold leading-[1.2]">
            Digital Marketing & SEO <br /> ServicesThat Grow Traffic & <br />{" "}
            Increase Revenue
          </h1>
        </div>

        <div>
          <p className="mt-10 font-jakarta text-gray-500">
            We are the top digital marketing agency for branding corp. We offer
            a full <br /> range of services to help clients improve their search
            engine rankings and <br /> drive more traffic to their websites.
          </p>

          <div className="flex justify-between w-100 items-center mt-10">
            <button className="btn">See more</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 p-16">
        {blogs.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} description={blog.description} accentColor={blog.accentColor} buttonVariant={blog.buttonVariant} />
      ))}
      </div>
    </section>
  );
};

export default CaseStudySection;
