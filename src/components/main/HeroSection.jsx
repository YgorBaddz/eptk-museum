import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[550px] w-full flex items-center justify-center py-16 mt-6">
      <Image
        src="/main-bg.jpg"
        alt="Background"
        fill
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Музей Элистинского Политехнического Колледжа <br />
          имени Эльвартынова И.Н
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl font-semibold">
          Сохраняем память о <span className="text-[#E67E22]">педагогах</span>,{" "}
          <span className="text-[#E67E22]">студентах</span> и{" "}
          <span className="text-[#E67E22]">событиях</span> колледжа
        </p>
        <Link
          href="/history"
          className="px-6 py-3 mt-6 uppercase font-bold text-white bg-[#E67E22] rounded-full hover:bg-[#ee872e] duration-300"
        >
          Узнать больше
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
