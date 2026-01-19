import axiosInstance from "./apiSetup"
interface LoginPayload {
    email: string
    password: string
}
interface SignupPayload extends LoginPayload {
    name: string
}
export const register = async (payload: SignupPayload) => {
    const res = await axiosInstance.post("/user/signup", payload);
    return res.data;
}
export const login = async (payload: LoginPayload) => {
    const res = await axiosInstance.post("/user/login", payload);
    return res.data;
}