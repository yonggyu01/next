import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { ClientState, ClientDispatch } from "./store";

export const useAppDispatch = () => useDispatch<ClientDispatch>();
export const useAppSelector: TypedUseSelectorHook<ClientState> = useSelector;
