import { BurgerAxios } from "./indexAxios";

export const getBurgers = () => {
    return BurgerAxios.get("BurgerFood");
}
export const getBurgerById = id => {
    return BurgerAxios.get(`BurgerFood/${id}`)
}
