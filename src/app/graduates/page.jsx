"use client";
import DynamicTabs from "@/components/DynamicTabs";

const GraduatesPage = () => {
  const collections = [
    {
      label: "Выпускники с 70-х",
      api: "graduates",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) =>
        parseInt(item.year) >= 1970 && parseInt(item.year) < 1980,
    },
    {
      label: "Выпускники с 80-х",
      api: "graduates",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) =>
        parseInt(item.year) >= 1980 && parseInt(item.year) < 1990,
    },
    {
      label: "Выпускники с 90-х",
      api: "graduates",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) =>
        parseInt(item.year) >= 1990 && parseInt(item.year) < 2000,
    },
    {
      label: "Выпускники с 2000-го года",
      api: "graduates",
      fields: [
        { name: "photos", type: "media", label: "Фото" },
        { name: "year", type: "string", label: "Год" },
      ],
      filter: (item) => parseInt(item.year) >= 2000,
    },
  ];

  return (
    <div className="py-10">
      <DynamicTabs collections={collections} />
    </div>
  );
};

export default GraduatesPage;
