import { useContext } from "react";
import { RouteContext } from "./RouteProvider";
import { RouteContextValue } from "./types";

export function useRoutes(): RouteContextValue {

    const context = useContext(RouteContext);
  
    if (context === undefined) {
      throw new Error();
    }
  
    return context;
    
  }