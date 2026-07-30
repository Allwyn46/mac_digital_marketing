import { Accordion, AccordionItem } from "@szhsin/react-accordion";

interface FAQ {
  question: string;
  answer: string;
  id: string;
}

const FAQ: FAQ[] = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing puts your business in front of people who are actively searching for what you offer, rather than waiting for them to find you by chance. It levels the playing field with larger competitors, gives you real-time data on what's working, and lets you adjust your approach quickly instead of committing to a strategy for months before seeing results.",
    id: crypto.randomUUID(),
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Through SEO, content marketing, and paid search campaigns, digital marketing improves how easily your site is found on search engines and social platforms. This means ranking higher for the keywords your customers are searching, building backlinks that signal authority to Google, and creating content that keeps people on your site longer, all of which push your visibility up over time.",
    id: crypto.randomUUID(),
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "Timelines vary by channel. Paid advertising can show traffic and leads within days of launch, while organic efforts like SEO and content marketing typically take 3 to 6 months to gain real traction as search engines index and rank your site. Most businesses see meaningful, compounding results within the first 6 months of a consistent strategy.",
    id: crypto.randomUUID(),
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success is tracked through concrete metrics tied to your goals: website traffic, conversion rates, cost per lead, click-through rates, and return on ad spend. We set up analytics and conversion tracking from day one, so every campaign has clear before-and-after numbers rather than vague impressions of whether it 'felt' successful.",
    id: crypto.randomUUID(),
  },
];

const AccordionComp = () => {
  return (
    <Accordion>
      {FAQ.map((f) => (
        <AccordionItem key={f.id} header={f.question}>
          {f.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComp;
