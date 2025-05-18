import Image from "next/image";
import Link from "next/link";

// Компонент отдельной карточки
function Card({ title, description, image, href }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          quality={80}
          priority={false}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#2C3E50] flex-grow">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-block px-4 py-2 bg-[#E67E22] rounded-full text-white font-bold text-center hover:bg-[#ee872e] duration-300"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default Card;
