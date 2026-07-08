import { Container } from "@/components/ui/Container";
import GalleryCard from "@/components/ui/galleryCard";
import { GALLERY } from "@/constants/gallery";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#090909] py-32"
    >
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
    Our Gallery
  </p>

  <h2 className="text-4xl font-bold text-white md:text-5xl">
    See Tesla in Action
  </h2>
  

  <p className="mt-6 text-lg leading-8 text-zinc-400">
    Take a closer look inside our workshop, our professional
    equipment, premium installations, and the craftsmanship
    trusted by customers since 2000.
  </p>
</div>
<div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
  {GALLERY.map((item) => (
    <GalleryCard
      key={item.id}
      image={item.image}
      title={item.title}
      size={item.size}
    />
  ))}
</div>

      </Container>
    </section>
  );
}