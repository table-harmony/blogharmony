import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="multiple" className="mt-6 md:w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It is accessible through all devices
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it up-to-date?</AccordionTrigger>
        <AccordionContent>
          Yes. Authors can create posts at all time and therefore is updated.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it cool?</AccordionTrigger>
        <AccordionContent>Yes. very much.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
