import DynamicTabs from "@/components/DynamicTabs";

const StaffPage = () => {
  const collections = [
    {
      label: "Руководители учебного заведения",
      api: "teachers",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Описание" },
        { name: "period_start", type: "string", label: "Начало работы" },
        { name: "period_end", type: "string", label: "Конец работы" },
        { name: "specialties", type: "array", label: "Специальности" },
      ],
    },
    {
      label: "Ветераны педагогического труда",
      api: "veteran-jobs",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Должности" },
        { name: "period_start", type: "string", label: "Начало работы" },
        { name: "period_end", type: "string", label: "Конец работы" },
        { name: "specialties", type: "array", label: "Специальности" },
      ],
    },
    {
      label: "Участники ВОВ и локальных войн",
      api: "war-competitors",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Описание" },
      ],
    },
    {
      label: "Кадровый состав на данный момент",
      api: "current-staffs",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Должности" },
        { name: "period_start", type: "string", label: "Начало работы" },
        { name: "specialties", type: "array", label: "Специальности" },
      ],
    },
  ];

  return (
    <div className="py-10">
      <DynamicTabs collections={collections} />;
    </div>
  );
};

export default StaffPage;
