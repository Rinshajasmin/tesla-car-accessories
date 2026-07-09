import { Container } from "@/components/ui/Container";
import BrandMarquee from "@/components/ui/brandMarquee";

export default function Brands() {
  return (
    <section id="brands" className="bg-[#090909] py-28">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            Trusted Brands
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Genuine Products. Trusted Performance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            We proudly install and support products from the world's leading
            automotive brands, ensuring quality, reliability and lasting
            performance for every vehicle.
          </p>
        </div>

        <BrandMarquee />
      </Container>
    </section>
  );
}
