import * as motion from "motion/react-client";
import Card from "./Card";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function CardsGrid({ cards }) {
  return (
    <motion.section
      className="py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map(({ title, description, image, href }) => (
          <motion.div key={href} variants={cardVariants}>
            <Card
              title={title}
              description={description}
              image={image}
              href={href}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default CardsGrid;
