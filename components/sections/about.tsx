import { Container } from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="bg-[#090909] py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-red-500">
            ABOUT TESLA
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Here's our story, <br />
            Trusted for Over 25 Years.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-400">
            What began as a small car accessories and key programming shop in a
            single room has grown into one of the region's trusted automotive
            solution centers.
            <br />
            <br />
            Since <span className="font-semibold text-white">2000</span>, Tesla
            has expanded through dedication, honest workmanship, and the trust
            of thousands of customers. Today, our workshop spans{" "}
            <span className="font-semibold text-white">4+ rooms</span>, offering
            premium accessories, advanced key programming, and modern hydrogen
            engine decarbonising services.
            <br />
            <br />
            Every vehicle that enters our workshop receives the same level of
            precision and care that helped us grow from our very first customer
            to the thousands we proudly serve today.
          </p>
        </div>
      </Container>
    </section>
  );
}
