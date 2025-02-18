"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn"); //it is to maintains state variable that determines whether the user sees the sign-in or sign-up form.
    
    return( 
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h auto md:w-[420px]">
                {state === "signIn"?<SignInCard setState={setState} />: <SignUpCard setState={setState} />} 
            </div>
        </div>
    )
}
