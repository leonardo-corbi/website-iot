import AccordionComponent from "@/components/iot/accordion";
import { Banner } from "@/components/iot/banner";

export default function SobreIot() {
  return (
    <div>
      <Banner />
      <section className="bg-muted py-36 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <AccordionComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
