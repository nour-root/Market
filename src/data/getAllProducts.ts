import axios from "axios";
export default async function GetAllProducts() {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      return res.data;
    });
  return response;
}
