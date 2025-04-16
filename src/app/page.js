import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      {/* Фоновое изображение с оверлеем */}
      <div className="relative h-1/2 w-full">
        <Image
          src="/main-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Затемняющий оверлей */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Текст по центру фото */}
        <div className="text-white absolute inset-0 gap-6 text-center px-4 flex items-center justify-center flex-col">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Музей Элистинского Политехнического Колледжа <br />
            имени Эльвартынова И.Н
          </h1>

          <p className="text-lg md:text-2xl">
            Сохраняем память о <span className="text-[#CF9056]">педагогах</span>
            , <span className="text-[#CF9056]">студентах</span> и
            <span className="text-[#CF9056]"> событиях </span>
            колледжа
          </p>

          <Link
            href={"/history"}
            className="px-4 py-4 mt-10 uppercase font-bold bg-[#CF9056] rounded-full hover:bg-[#c18043] duration-300"
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </main>
  );
}
