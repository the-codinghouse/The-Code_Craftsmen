//"https://dummyjson.com/products";
export async function getAllProducts() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}
