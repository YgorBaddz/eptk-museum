import DynamicTabs from "@/components/DynamicTabs";

const StaffPage = () => {
  const collections = [
    {
      label: "Руководители учебного заведения",
      api: "teachers",
      fields: [
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "period_start", type: "string", label: "Начало работы" },
        { name: "period_end", type: "string", label: "Конец работы" },
        { name: "specialties", type: "array", label: "Специальности" },
      ],
    },
    {
      label: "Ветераны педагогического труда",
      api: "veteran-jobs",
      fields: [
        { name: "name", type: "string", label: "ФИО" },
        { name: "description", type: "string", label: "Должности" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "period_start", type: "string", label: "Начало работы" },
        { name: "period_end", type: "string", label: "Конец работы" },
        { name: "specialties", type: "array", label: "Специальности" },
      ],
    },
  ];

  return <DynamicTabs collections={collections} />;
};

export default StaffPage;
