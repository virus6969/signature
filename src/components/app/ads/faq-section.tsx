import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
    {
        question: "My handwriting is really bad. Is it a problem?",
        answer: "Not at all. Most of our clients have bad handwriting. Our process is designed to be easy and efficient. With the personal video tutorial and training stencil, you'll be signing beautifully with just 15 minutes of practice."
    },
    {
        question: "How long does the signature creation take?",
        answer: "The initial signature options are typically created within 3 days. If you need revisions, they are completed within 24 hours after we receive your feedback. The final package, including the video tutorial, is also delivered promptly."
    },
    {
        question: "Will my new signature be legally binding?",
        answer: "There are no legal requirements for what a signature must look like. You can change your signature daily if you wish! Our service provides you with a professional and consistent signature, but its legal standing is the same as any other signature you adopt."
    },
    {
        question: "How do you protect my personal data?",
        answer: "We take data privacy very seriously. We use data encryption and follow strict internal procedures to limit access. We are compliant with GDPR and relevant US laws. We will never use your signature or data publicly without your explicit consent."
    },
     {
        question: "What if I'm not satisfied?",
        answer: "We offer a money-back guarantee and unlimited edits on our popular plans. Our goal is to ensure you are 100% delighted with your new signature. We will work with you until you have a design you love."
    }
]

export default function FaqSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto max-w-3xl">
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
        <div className="mt-12 text-center">
            <Button
                size="lg"
                className="h-14 text-base md:text-lg min-w-[280px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all animate-jiggle"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
                Create My Signature - 50% Off
            </Button>
        </div>
      </div>
    </section>
  );
}
