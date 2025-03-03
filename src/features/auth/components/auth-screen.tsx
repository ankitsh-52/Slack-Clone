"use client"

import { useState } from "react";
import { signInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<signInFlow>("signIn");
    return(
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state === "signIn" ? <SignInCard setState={()=>{setState("signUp")}}/> : <SignUpCard setState={()=>{setState("signIn")}}/>}
            </div>
        </div>
    );
};