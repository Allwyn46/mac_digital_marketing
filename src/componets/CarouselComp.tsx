import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "",
  },
  {
    quote:
      "Working with this team transformed how we approach our marketing. The results speak for themselves — engagement is up and our brand feels sharper than ever.",
    name: "Sarah Connor",
    title: "CMO of Skynet Inc",
    avatar: "",
  },
  {
    quote:
      "Responsive, strategic, and genuinely invested in our growth. It's rare to find a partner that treats your business like their own.",
    name: "James Halpert",
    title: "Founder of Dunder Co",
    avatar: "",
  },
];

const CarouselComp = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <div className="w-full container p-5 mx-auto bg-[#FAFAFA] rounded-3xl px-10 pt-10 pb-8">
      <Carousel
        selectedItem={current}
        onChange={(index) => setCurrent(index)}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable
        emulateTouch
      >
        {testimonials.map((t, i) => (
          <div key={i} className="text-left mt-10">
            <p className="font-jakarta text-2xl leading-relaxed text-gray-950">
              <span className="mr-1">“</span>
              {t.quote}
              <span className="ml-1">”</span>
            </p>
          </div>
        ))}
      </Carousel>

      {/* Footer row: avatar/name + pagination + arrows */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-gray-300 overflow-hidden shrink-0">
            {testimonials[current].avatar && (
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="font-jakarta font-semibold text-gray-950 leading-tight">
              {testimonials[current].name}
            </p>
            <p className="font-jakarta text-sm text-gray-500 leading-tight">
              {testimonials[current].title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <p className="font-jakarta text-sm text-gray-500">
            <span className="underline text-gray-950">
              {String(current + 1).padStart(2, "0")}
            </span>
            /{String(total).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="h-4 w-4 text-gray-800" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-950 hover:bg-gray-800 transition"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
