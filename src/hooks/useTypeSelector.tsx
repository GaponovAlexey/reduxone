import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateTypeOf } from "../store";


export const useTypeSelector: TypedUseSelectorHook<RootStateTypeOf > = useSelector