// Fetch all categories with related specialties
export const getSpecialtyCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/specialty-categories?populate=specialties`
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data = await res.json();
  return data.data;
};

// Fetch specialties for a given category, with all relations
export const getSpecialtiesByCategory = async (categoryId) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/specialties?populate=*&filters[specialty_categories][id][$eq]=${categoryId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch specialties");
  const data = await res.json();
  return data.data;
};
