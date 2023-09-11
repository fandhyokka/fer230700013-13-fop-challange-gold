import { handler } from "./handler";

// const apis = {
//   getCars: (queryParams) => handler.get("/admin/v2/car", { params: queryParams }),
//   getOrdersCars: () => handler.get("/admin/v2/order"),
//   putUpdateCar: (id, formData) => handler.put(`/admin/car/${id}`, formData),
// };

export const loginAdmin = (body) => handler.post("/admin/auth/login", body);
export const getCars = (queryParams) => handler.get("/admin/v2/car", { params: queryParams });
export const getCarsById = (id, queryParams) => handler.get(`/admin/car/${id}`, { params: queryParams });
