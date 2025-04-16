import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 py-8 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Социальные иконки */}
        <div className="flex space-x-4">
          <SocialIcon
            url="https://vk.com/eptk08"
            bgColor="#CF9056"
            fgColor="#1D1D1D"
            style={{ height: 36, width: 36 }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
          />
          <SocialIcon
            url="https://t.me/elista_politeh"
            bgColor="#CF9056"
            fgColor="#1D1D1D"
            style={{ height: 36, width: 36 }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          />
        </div>

        {/* Текст с регистрацией */}
        <p className="text-sm max-w-md md:max-w-lg">
          №1556 в Реестре российского ПО (на основании приказа Министерства
          цифрового развития, связи и массовых коммуникаций Российской Федерации
          от 06.09.2016 №426)
        </p>

        {/* Контакты */}
        <div className="text-sm space-y-1 text-right md:text-left">
          <p>
            Телефон:{" "}
            <a
              href="tel:+1234567890"
              className="text-[#CF9056] hover:underline"
            >
              +7 (84722) 3-54-04, +7 (84722) 3-47-71
            </a>
          </p>
          <p>
            358009, Республика Калмыкия, г. Элиста, пр. имени Чонкушова П.О., д.
            1
          </p>
        </div>
      </div>
    </footer>
  );
}
