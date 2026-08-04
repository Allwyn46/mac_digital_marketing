import { ArrowRight } from "lucide-react";

type BlogCardProps = {
  title: string;
  description: string;
  readTime?: string;
  accentColor?: string;
  buttonVariant?: string;
};

const BlogCard = ({
  title,
  description,
  readTime = "5 min read",
  accentColor = "#3B82F6",
  buttonVariant = "filled", // filled | outline
}: BlogCardProps) => {
  return (
    <article className="w-[440px] rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: accentColor }}
        />

        <span className="text-sm text-gray-500">{readTime}</span>
      </div>

      {/* Content */}
      <h2 className="mb-8 text-4xl font-semibold leading-tight">{title}</h2>

      <div className="flex items-end justify-between gap-6">
        <p className="line-clamp-3 text-sm leading-7 text-gray-500">
          {description}
        </p>

        <button
          className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
            buttonVariant === "filled"
              ? "bg-black text-white"
              : "border border-black bg-white text-black"
          }`}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
