import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Достижения колледжа",
    description:
      "Узнайте о значимых достижениях и наградах, которые получил наш колледж за годы работы.",
    image: "/achi-card-image.jpg",
    href: "/achievements",
  },
  {
    title: "Выпускники",
    description:
      "Познакомьтесь с нашими успешными выпускниками и их вкладом в развитие отрасли.",
    image: "/gradu-img.jpg",
    href: "/graduates",
  },
  {
    title: "История колледжа",
    description:
      "Погрузитесь в богатую историю и традиции Элистинского Политехнического Колледжа.",
    image: "/history.jpg",
    href: "/history",
  },
  {
    title: "Специальности",
    description:
      "Ознакомьтесь с образовательными программами и специальностями, которые мы предлагаем.",
    image: "/speci.jpg",
    href: "/specialties",
  },
  {
    title: "Кадровый состав",
    description:
      "Познакомьтесь с преподавателями и сотрудниками, которые делают колледж уникальным.",
    image: "/staff.jpg",
    href: "/staff",
  },
];

export default function Home() {
  return (
    <main className="relative h-screen w-full text-white">
      {/* Верхняя половина с фоном и текстом */}
      <section className="relative h-1/2 w-full">
        <Image
          src="/main-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-6">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Музей Элистинского Политехнического Колледжа <br />
            имени Эльвартынова И.Н
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl">
            Сохраняем память о <span className="text-[#CF9056]">педагогах</span>
            , <span className="text-[#CF9056]">студентах</span> и{" "}
            <span className="text-[#CF9056]">событиях</span> колледжа
          </p>
          <Link
            href="/history"
            className="px-6 py-3 mt-6 uppercase font-bold bg-[#CF9056] rounded-full hover:bg-[#c18043] duration-300"
          >
            Узнать больше
          </Link>
        </div>
      </section>

      {/* Нижняя половина с описанием */}
      <section className="h-1/2 flex items-center justify-center border-b-2 border-[#CF9056] px-4">
        <h4 className="max-w-[600px] text-center text-xl lg:text-3xl">
          Мы <span className="text-[#CF9056]">сохраняем </span>и{" "}
          <span className="text-[#CF9056]">передаем </span> будущим поколениям
          память о <span className="text-[#CF9056]">педагогах</span>,{" "}
          <span className="text-[#CF9056]">студентах </span>и важных{" "}
          <span className="text-[#CF9056]">событиях</span> колледжа. <br />
          Наш музей - это живая <span className="text-[#CF9056]">
            история{" "}
          </span>{" "}
          технического образования и человеческих достижений.
        </h4>
      </section>

      {/* Рекламные карточки */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map(({ title, description, image, href }) => (
            <div
              key={href}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover inset-0 bg-black opacity-70"
                  quality={80}
                  priority={false}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 flex-grow">{description}</p>
                <Link
                  href={href}
                  className="mt-4 inline-block px-4 py-2 bg-[#CF9056] rounded-full text-black font-bold text-center hover:bg-[#c18043] duration-300"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
