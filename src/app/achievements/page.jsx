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
    {
      label: "Профессионал",
      api: "student-springs",
      fields: [
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => item.isProfessional,
    },
    {
      label: "WorldSkills",
      api: "student-springs",
      fields: [
        { name: "description", type: "string", label: "Описание" },
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => item.isWorldSkills,
    },
  ];

  return (
    <div className="py-10">
      <DynamicTabs collections={collections} />
    </div>
  );
};

export default AchievementsPage;
