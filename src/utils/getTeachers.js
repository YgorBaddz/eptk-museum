export const getTeachers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/teachers?populate=*`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch teachers");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
};
