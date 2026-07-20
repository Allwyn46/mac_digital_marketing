import blob from "../assets/blob_back.png";
import signal from "../assets/signal.png";

export function TrafficCard() {
  return (
    <div className="relative w-[830px] h-[300px] rounded-2xl bg-black overflow-hidden">
      {/* blob image, positioned behind content */}
      <img
        src={blob}
        alt=""
        className="absolute -bottom-20 -left-20 w-[600px] h-auto pointer-events-none select-none"
      />

      <div className="relative z-10 p-8 flex flex-col justify-center h-full text-white">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-white/60" />
          <span className="text-sm font-medium">
            Drive More Traffic and Sales
          </span>
        </div>
        <h2 className="text-4xl font-semibold leading-tight">
          Drive more traffic
          <br />
          and product sales
        </h2>

        <img
          src={signal}
          alt="signal"
          className="absolute bottom-0 right-10 w-[300px] h-auto pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
