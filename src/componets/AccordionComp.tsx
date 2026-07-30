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
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    id: crypto.randomUUID.toString(),
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    id: crypto.randomUUID.toString(),
  },
  {
    question:
      "How long does it take to see results from digital marketing efforts?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    id: crypto.randomUUID.toString(),
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    id: crypto.randomUUID.toString(),
  },
];

const AccordionComp = () => {
  return (
    <Accordion>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat
        quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan
        auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet ante.
        Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComp;
