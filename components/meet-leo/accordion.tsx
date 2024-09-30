import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "item-1",
    title: "Informações pessoais",
    content:
      "Meu nome é Leonardo Cesar Corbi, tenho 17 anos, nasci no dia 3 de Dezembro e quero fazer faculdade de Ciências da Computação na Inteli.",
  },
  {
    id: "item-2",
    title: "Reflexão sobre o Ensino Médio",
    content:
      "O ensino médio me trouxe grandes amigos e projetos, como o SenaMUN, mas deixou a desejar no quesito vestibular, gostaria de ter tido mais assistência em relação a isso.",
  },
  {
    id: "item-3",
    title: "Tarefa favorita",
    content:
      "Sem pensar duas vezes, a melhor tarefa/projeto que eu tive durante esse ano foi o SenaMUN, me trouxe muito conhecimento e liberou uma habilidade que eu não sabia que tinha, todo meu agradecimento a minha professora Thais que me proporcionou essa oportunidade.",
  },
];

export default function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {services.map((service) => (
        <AccordionItem key={service.id} value={service.id}>
          <AccordionTrigger>{service.title}</AccordionTrigger>
          <AccordionContent>{service.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
