import Card from "./Card";

function CardsGrid({ cards }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map(({ title, description, image, href }) => (
          <Card
            key={href}
            title={title}
            description={description}
            image={image}
            href={href}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsGrid;
