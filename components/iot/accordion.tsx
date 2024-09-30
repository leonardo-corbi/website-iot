import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const services = [
  {
    id: "item-1",
    title: "Atividade do Boné",
    content:
      "Atividade de um boné com vários sensores, pode ser útil para pessoas que possuem deficiencias visuais e etc.",
    videoSrc: "https://www.youtube.com/embed/Ez-ER483uKw?si=oBAJJyYb2bm7H3kI",
  },
  {
    id: "item-2",
    title: "Atividade de Carrinho",
    content:
      "Atividade de um carrinho que segue uma fita preta e não sai da linha",
    videoSrc: "https://www.youtube.com/embed/tNv0VMnjO3Y?si=VRHVS_NdxU5JMHRW",
  },
];

export default function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map((service) => (
        <AccordionItem key={service.id} value={service.id}>
          <AccordionTrigger>{service.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            {service.content}
            <HeroVideoDialog
              animationStyle="top-in-bottom-out"
              videoSrc={service.videoSrc}
              thumbnailSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0KGIxOTkoFc3K-W2EwNIhezVajVTRtcJsQ&s"
              thumbnailAlt="Hero Video"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
