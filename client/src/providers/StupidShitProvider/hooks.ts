import { useContext } from "react";
import { StupidShitContext } from "./StupidShitProvider";
import { StupidShitContextValue } from "./types";

export function useStupidShit(): StupidShitContextValue {

    const context = useContext(StupidShitContext);

    if (context === undefined) {
        throw new Error();
    }

    return context;

}