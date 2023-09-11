// import api from "../../api";
// import { useNavigate } from "react-router";

// const TestAja = () => {
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       const response = await api.loginAdmin({
//         email: "admin@bcr.io",
//         password: "123456",
//       });

//       localStorage.setItem("token", response.data.access_token);

//       const carResponse = await api.getCars();

//       console.log("cars", carResponse);
//     } catch (error) {
//       console.log("err", error);
//     }
//   };

//   const searchCar = async () => {
//     try {
//       const { data } = await api.getCars({
//         page: 1,
//         pageSize: 10,
//       });
//       setCardata(data);

//       console.log("Data Mobil:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={login}>Login</button>
//     </div>
//   );
// };

// export default TestAja;
