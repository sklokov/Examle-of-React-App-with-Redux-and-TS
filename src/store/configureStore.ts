import {configureStore} from "@reduxjs/toolkit";
import {Action, combineReducers} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {ThunkAction} from "redux-thunk";
import mainPageReducer from "./main-page-reducer";

export const rootReducer = combineReducers({
    mainPage: mainPageReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[])=> infer U} ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
export type RootState = ReturnType<typeof rootReducer>