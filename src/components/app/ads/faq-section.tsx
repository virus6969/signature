import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: "My handwriting is terrible. Can you still help?",
        answer: "Absolutely. Your handwriting doesn’t matter at all — we design everything from scratch."
    },
    {
        question: "How long does it take?",
        answer: "You’ll receive your first 3 signature designs within 24 hours."
    },
    {
        question: "Is the signature legally usable?",
        answer: "Yes. Your new signature works on contracts, documents, and official papers just like your current one."
    },
    {
        question: "Is my data safe?",
        answer: "We never share, sell, or store your personal data. Everything stays fully private."
    },
     {
        question: "What if I don’t like the signature?",
        answer: "You get unlimited revisions until you love it — guaranteed."
    }
]

export default function FaqSection() {
  return (
    <section className="bg-card">
      <div className="container mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-3xl font-headline text-center font-bold mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>

                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}
