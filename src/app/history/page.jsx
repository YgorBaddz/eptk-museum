import Image from "next/image";
import * as motion from "motion/react-client";

const timelineData = [
  {
    year: "1965",
    title: "Основание техникума",
    text: `Всё началось 1 сентября 1965 года с организации политехнического техникума, который по ходатайству руководства Калмыцкой АССР готовил специалистов мясомолочной промышленности, гражданского строительства и транспорта. Первым директором стал Менглинов Н.О., который приложил немало усилий для нормального становления учебного процесса. В те годы техникум арендовал помещения и испытывал нехватку оборудования, что вскоре привело к строительству собственных учебных корпусов и общежития.`,
  },
  {
    year: "1974",
    title: "Реорганизация в авто-дорожный техникум",
    text: `В 1974 году, учитывая потребности в развитии дорожной и транспортной инфраструктуры, техникум был реорганизован в Элистинский автомобильно-дорожный техникум. Этот этап стал важным в истории колледжа, поскольку подготовка специалистов для автомобильной отрасли стала приоритетной.`,
  },
  {
    year: "2002",
    title: "Получение статуса колледжа",
    text: `В 2002 году техникум получил статус колледжа и начал успешно реализовывать многопрофильные образовательные программы. В этот период колледж расширил сотрудничество с профильными вузами России, что позволило выпускникам продолжать образование и занимать ответственные должности.`,
  },
  {
    year: "2014",
    title: "Объединение колледжей",
    text: `Важным событием стало объединение в 2014 году Элистинского автомобильно-дорожного колледжа с Технолого-строительным колледжем, что позволило создать современное многопрофильное учебное заведение - Элистинский политехнический колледж.`,
  },
  {
    year: "2022",
    title: "Присвоение имени Эльвартынова",
    text: `Сегодня колледж располагает четырьмя учебными корпусами, общежитиями, спортзалами и учебным автопарком. В 2022 году учебному заведению было присвоено имя Ильи Нимановича Эльвартынова - заслуженного работника народного хозяйства Республики Калмыкия.`,
  },
  {
    year: "2024",
    title: "Открытие Центра опережающей подготовки",
    text: `30 августа 2024 года на базе колледжа открылся Центр опережающей профессиональной подготовки, задача которого - обеспечивать республику квалифицированными кадрами и внедрять современные образовательные технологии.`,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, easing: "ease-out" },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, easing: "ease-out" },
  },
};

const History = () => {
  return (
    <motion.section className="max-w-6xl mx-auto px-6 py-12 text-[#2C3E50]">
      {/* Обёртка для изображения с текстом */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, easing: "ease-out" }}
      >
        <Image
          src="/history.jpg"
          alt="Фото колледжа"
          width={1200}
          height={675}
          className="w-full h-auto object-cover object-center"
          priority
        />
        <div className="absolute left-4 bottom-4 bg-[#E67E22] bg-opacity-60 text-white rounded-md px-4 py-2 max-w-xl shadow-lg">
          <p className="text-base sm:text-lg font-bold">
            Элистинский политехнический колледж
          </p>

          <p className="text-sm sm:text-base font-semibold">
            Учебное заведение с богатой историей
          </p>
        </div>
      </motion.div>

      <motion.h1
        className="text-2xl lg:text-4xl font-bold mb-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, easing: "ease-out" }}
      >
        История Элистинского политехнического колледжа имени И.Н. Эльвартынова
      </motion.h1>

      <motion.div
        className="bg-white rounded-lg p-6 mb-10 shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, easing: "ease-out" }}
      >
        <p className="leading-relaxed text-justify">
          Элистинский политехнический колледж - учебное заведение с богатой
          историей, сыгравшее ключевую роль в подготовке квалифицированных
          специалистов для Республики Калмыкия.
        </p>
      </motion.div>

      {/* Timeline с анимацией каждого элемента при попадании в viewport */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Вертикальная линия для md+ */}
        <motion.div
          className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-[#E67E22] origin-top opacity-30 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={lineVariants}
        />

        {timelineData.map(({ year, title, text }, index) => (
          <motion.div
            key={year}
            className="flex flex-col md:flex-row items-start mb-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            transition={{ delay: index * 0.2 }}
          >
            {/* Точка и линия вниз (для md+) */}
            <div className="flex md:flex-col items-center md:mr-8 mb-4 md:mb-0">
              <motion.div
                className="w-6 h-6 rounded-full bg-[#E67E22] border-4 border-white z-10 relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.4,
                  easing: "ease-out",
                }}
              />
              {index !== timelineData.length - 1 && (
                <motion.div
                  className="hidden md:block flex-1 w-[2px] bg-[#E67E22] opacity-30"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.2 + 0.2,
                    duration: 0.4,
                    easing: "ease-out",
                  }}
                  style={{ originY: 0 }}
                />
              )}
            </div>

            {/* Год и название эпохи */}
            <div className="flex-shrink-0 mb-2 md:mb-0 md:w-48 md:mt-1 md:mr-6 flex items-center">
              <h3 className="text-lg font-semibold flex flex-wrap items-center">
                <span className="text-[#E67E22] mr-2">{year}</span>
                <span className="text-[#34495E]">{title}</span>
              </h3>
            </div>

            {/* Текстовый блок */}
            <div className="bg-white rounded-lg p-6 shadow-md flex-1 w-full">
              <p className="leading-relaxed text-justify">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white rounded-lg p-6 mt-10 shadow-md max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: timelineData.length * 0.1 + 0.1,
          duration: 0.4,
          easing: "ease-out",
        }}
      >
        <p className="leading-relaxed text-justify">
          Элистинский политехнический колледж продолжает традиции качественной
          подготовки специалистов, активно участвует в региональных и
          всероссийских конкурсах и чемпионатах, и является опорой
          профессионального образования Калмыкии.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default History;
