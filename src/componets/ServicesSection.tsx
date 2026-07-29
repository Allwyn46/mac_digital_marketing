import { useState } from "react";
import blob from "../assets/blob_back.png";
import ServiceButton from "./ServiceButton";

const filters = [
  { label: "All Work", count: 20 },
  { label: "UI/UX Design", count: 10 },
  { label: "Digital Marketing", count: 5 },
  { label: "Branding", count: 5 },
];

const projects = [
  {
    company: "Ai Corporation, 2023",
    title: "Ai Wave - Ai Chatbot Mobile App",
    image: null, // swap in real thumbnail
  },
  {
    company: "Lancer Corporation, 2023",
    title: "App Lancer - Freelance Marketplace",
    image: null,
  },
  {
    company: "Nova Corporation, 2023",
    title: "Nova Bank - Digital Banking App",
    image: null,
  },
];

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");

  return (
    <div className="container mx-auto">
      <div className="mt-40 font-jakarta relative w-[1788px] h-[882px] rounded-4xl bg-black overflow-hidden px-5">
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

          <div className="mt-20 flex justify-center gap-4 items-center">
            {filters.map((f) => (
              <ServiceButton
                key={f.label}
                ButtonTXT={f.label}
                count={f.count}
                isActive={activeFilter === f.label}
                onClick={() => setActiveFilter(f.label)}
              />
            ))}
          </div>

          {/* Slider */}
          <div className="mt-16 relative">
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {/* Circular "See Details" card */}
              <div className="shrink-0 snap-start w-[420px] h-[420px] rounded-full bg-neutral-300 border-2 border-neutral-500 flex items-center justify-center relative">
                <button className="w-[105px] h-[105px] rounded-full bg-lime-400 text-black text-sm font-semibold flex items-center justify-center text-center hover:bg-lime-300 transition-colors">
                  See Details
                </button>
              </div>

              {/* Project cards */}
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="shrink-0 snap-start w-[420px] h-[420px] rounded-[28px] bg-neutral-300 relative overflow-hidden"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute top-5 left-5 flex items-center gap-2 text-white text-xs">
                    <span className="w-4 h-px bg-white/70" />
                    {p.company}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white font-semibold text-lg">
                    {p.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
