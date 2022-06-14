
// import axios from "axios";
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}



// const imagesApi = {
//   fetchImages: async () => {
//     try {
//       return await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6");
//     } catch (error) {
//       return error
//     }
//   }
// };