// Assuming this is a utility function or part of a parent component
export async function fetchData(categoryId) {
    try {
      const response = await fetch(`/api/category/products?category_id=${categoryId}`);
      const data = await response.json();
      return data?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  