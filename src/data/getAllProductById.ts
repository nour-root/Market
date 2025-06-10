import axios from "axios";
export default async function GetAllProductById(id: number) {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      return res.data;
    });
  return response;
}
