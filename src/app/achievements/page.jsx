"use client";
import DynamicTabs from "@/components/DynamicTabs";

const AchievementsPage = () => {
  const collections = [
    {
      label: "Студенческая весна",
      api: "student-springs",
      fields: [
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => item.isStudentSpring,
    },
    {
      label: "Спорт",
      api: "student-springs",
      fields: [
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => item.isSport,
    },
    {
      label: "Наука",
      api: "student-springs",
      fields: [
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => item.isSciense,
    },
  ];

  return (
    <div className="py-10">
      <DynamicTabs collections={collections} />
    </div>
  );
};

export default AchievementsPage;
