import * as motion from "motion/react-client";

function DescriptionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center border-b-2 border-[#E67E22] px-4 py-12"
    >
      <h4 className="max-w-[600px] text-center text-xl lg:text-3xl">
        Мы <span className="text-[#E67E22]">сохраняем </span>и{" "}
        <span className="text-[#E67E22]">передаем </span> будущим поколениям
        память о <span className="text-[#E67E22]">педагогах</span>,{" "}
        <span className="text-[#E67E22]">студентах </span>и важных{" "}
        <span className="text-[#E67E22]">событиях</span> колледжа. <br />
        Наш музей - это живая <span className="text-[#E67E22]">
          история{" "}
        </span>{" "}
        технического образования и человеческих достижений.
      </h4>
    </motion.section>
  );
}

export default DescriptionSection;
