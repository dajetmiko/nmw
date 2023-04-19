import { IAksi, TypeAksi } from "@/store/reducers";

export const storeDarkMode = (payload: boolean) => {
  const tipe: TypeAksi = "DARK_MODE"
  const isiPayload = {
    darkMode: payload
  }
  localStorage.setItem("darkMode", JSON.stringify(payload ? "1" : "0"))

  return {
    type: tipe,
    payload: isiPayload
  } as IAksi
}