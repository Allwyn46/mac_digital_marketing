import AccordionComp from "./AccordionComp";

const FAQ = () => {
  return (
    <section className="container">
      <div className="flex justify-between items-center mt-40">
        <div>
          <h1 className="font-jakarta text-4xl font-semibold">
            Digital Marketing FAQs
          </h1>

          <p className="mt-10 font-jakarta text-gray-500">
            As a leading digital marketing agency, we are dedicated to providing{" "}
            <br />
            comprehensive educational resources and answering frequently <br />
            asked questions to help our clients.
          </p>

          <div className="flex justify-between w-100 items-center mt-10">
            <button className="btn">More Questions</button>
            <button>Contact Us</button>
          </div>
        </div>

        <div>
          <AccordionComp />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
