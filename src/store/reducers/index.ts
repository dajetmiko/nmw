import { ui } from "./ui";
import { combineReducers } from "redux";

/**
 * @param {any | number} payload 
 */
export interface IRootRedux {
  ui?: {
    darkMode: boolean
  }
}

export interface IAksi {
  type: TypeAksi,
  payload: {[x: string]: any | number},
}


const semuaReducer = combineReducers({
  ui: ui
})

export type TypeAksi = 'DARK_MODE'

export default semuaReducer

export type StateReducer = ReturnType<typeof semuaReducer>