// import "../login-page/LoginPage.css";
// import useAuth from "../../hooks/useAuth";
// import axios from "axios";

// const LoginPage = () => {
//   const authState = useAuth();

//   let axiosInstance = axios.create();

//   axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = window.accessToken ? window.accessToken : "dummy_token";
//       config.headers["Authorization"] = "Bearer " + token;
//       return config;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );

//   axiosInstance.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       Promise.reject(error);
//     }
//   );

//   if (authState && authState.authenticated) {
//     fetchRandom();
//     return <div>Dzień dobry</div>;
//   }
// };

// export default LoginPage;

// const fetchRandom = (token) => {
//   // const controller = new AbortController();
//   // fetch("http://localhost:8080/api/category/random", {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "text/plain",
//   //   },
//   //   signal: controller.signal,
//   // })
//   //   .then((resp) => {
//   //     if (resp.ok) {
//   //       return resp.json();
//   //     }
//   //     throw resp;
//   //   })
//   //   .then((data) => {
//   //     if (data) {
//   //       console.log(data);
//   //     }
//   //   })
//   //   .catch((error) => {
//   //     throw error;
//   //   });

//   // return () => {
//   //   controller.abort();
//   // };

//   axios
//     .get("http://localhost:8080/api/category/random", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     })
//     .then((resp) => {
//       console.log(resp);
//     })
//     .catch((err) => console.log(err));
// };
