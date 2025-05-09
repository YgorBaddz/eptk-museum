"use client";
import { useEffect, useState } from "react";
import DynamicTabs from "@/components/DynamicTabs";
import { getSpecialtyCategories } from "@/utils/getSpecialty";

const specialtiesFields = [
  { name: "photos", type: "media", label: "Фото" },
  { name: "name", type: "string", label: "Название" },
  { name: "teachers", type: "array", label: "Преподаватели" },
  { name: "current_staffs", type: "array", label: "Текущий состав" },
];

const SpecialtiesPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getSpecialtyCategories().then((categories) => {
      const tabs = categories.map((cat) => ({
        label: cat.name,
        api: "specialties",
        fields: specialtiesFields,
        filter: (item) =>
          Array.isArray(item.specialty_categories) &&
          item.specialty_categories.some((c) => c.id === cat.id),
      }));
      setCollections(tabs);
    });
  }, []);

  if (!collections.length) {
    return <div className="text-center py-10 text-[#CF9056]">Загрузка...</div>;
  }

  return (
    <div className="py-10">
      <DynamicTabs collections={collections} />
    </div>
  );
};

export default SpecialtiesPage;
