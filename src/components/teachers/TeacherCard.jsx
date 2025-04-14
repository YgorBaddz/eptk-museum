import PhotoSlider from "../PhotoSlider";

const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-[#CF9056] duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[#c18043] rounded-lg p-4 w-full md:w-1/2 xl:w-1/3">
      {teacher.photos && teacher.photos.length > 0 && (
        <PhotoSlider photos={teacher.photos} />
      )}

      <div className="flex flex-col gap-2 mt-4 text-white">
        <h2 className="text-lg font-bold">{teacher.name}</h2>

        <p className=" ">
          Период работы: {teacher.period_start || "Неизвестно"} -{" "}
          {teacher.period_end || "Неизвестно"}
        </p>

        <div className=" flex gap-1 flex-wrap">
          Специальности:
          <span className="flex gap-1">
            {teacher.specialties.map((specialty) => (
              <p key={specialty.id}>{specialty.name} |</p>
            ))}
          </span>
        </div>

        <p className="text-gray-600">{teacher.description}</p>
      </div>
    </div>
  );
};

export default TeacherCard;
