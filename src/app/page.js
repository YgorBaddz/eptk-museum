import CardsGrid from "@/components/main/CardsGrid";
import DescriptionSection from "@/components/main/DescriptionSection";
import HeroSection from "@/components/main/HeroSection";
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
    image: "/history-primary.jpg",
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
    <main className="w-full text-[#2C3E50]">
      <HeroSection />
      <DescriptionSection />
      <CardsGrid cards={cards} />
    </main>
  );
}
