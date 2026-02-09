import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a keratin treatment last?',
    answer: 'A keratin treatment typically lasts 3-6 months, depending on your hair type and how well you maintain it. We recommend using sulfate-free shampoos and avoiding excessive heat styling to extend the results.',
  },
  {
    question: 'Is hair coloring safe for all hair types?',
    answer: 'Yes, we use premium, ammonia-free color products that are safe for all hair types. Our stylists will assess your hair condition and recommend the best coloring technique for your specific needs.',
  },
  {
    question: 'How often should I get a hair spa treatment?',
    answer: 'For optimal hair health, we recommend a hair spa treatment every 2-4 weeks. However, the frequency can vary based on your hair condition, lifestyle, and specific concerns.',
  },
  {
    question: 'What should I do to prepare for a facial?',
    answer: 'Arrive with a clean face (no makeup), avoid sun exposure for 24 hours before, and inform us of any skin sensitivities or allergies. We\'ll customize the facial to your skin type and concerns.',
  },
  {
    question: 'Can I get a haircut and color on the same day?',
    answer: 'Yes, absolutely! We can combine services in a single visit. However, for major transformations, we may recommend scheduling them separately to ensure the best results and give your hair adequate care.',
  },
  {
    question: 'Do you offer bridal packages?',
    answer: 'Yes, we offer comprehensive bridal packages including hair styling, makeup, pre-bridal treatments, and trial sessions. Contact us to discuss your wedding day vision and we\'ll create a customized package for you.',
  },
];

export default function FaqAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked <span className="text-gold">Questions</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border border-border/40 rounded-lg px-6 bg-card hover-lift"
          >
            <AccordionTrigger className="hover:no-underline hover:text-gold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
