"use client";
import { getTeachers } from "@/utils/getTeachers";
import { useEffect, useState } from "react";
import TeacherSearch from "./TeacherSearch";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      const fetchedTeachers = await getTeachers();
      setTeachers(fetchedTeachers);
      setLoading(false);
    };

    fetchTeachers();
  }, []);

  return (
    <div className="">
      <TeacherSearch teachers={teachers} loading={loading} />
    </div>
  );
};

export default TeacherList;
