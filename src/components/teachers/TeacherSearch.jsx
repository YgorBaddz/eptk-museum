import { useState, useMemo } from "react";
import TeacherCard from "./TeacherCard";

const TeacherSearch = ({ teachers, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Если строка поиска пустая — показываем всех учителей
  // Иначе фильтруем по имени и специальностям
  const filteredTeachers = useMemo(() => {
    if (!searchTerm.trim()) {
      return teachers;
    }

    const term = searchTerm.toLowerCase();

    return teachers.filter((teacher) => {
      const nameMatch = teacher.name.toLowerCase().includes(term);

      const specialtiesMatch = teacher.specialties.some((specialty) =>
        specialty.name.toLowerCase().includes(term)
      );

      return nameMatch || specialtiesMatch;
    });
  }, [searchTerm, teachers]);

  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Поиск по имени или специальностям"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border outline-none text-[#CF9056] border-gray-300 rounded px-3 py-2 mb-8 w-full max-w-md"
          disabled={loading}
        />
      </div>

      {loading ? (
        <p className="text-center text-[#CF9056]">Загрузка учителей...</p>
      ) : filteredTeachers.length > 0 ? (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-600">Учителя не найдены</p>
      )}
    </div>
  );
};

export default TeacherSearch;
