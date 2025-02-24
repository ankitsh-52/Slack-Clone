import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-context-menu";

//icons
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { signInFlow } from "../types";
import { useState } from "react";

//convex hooks
import { useAuthActions } from "@convex-dev/auth/react";

interface SignInCardProps {
    setState: (state: signInFlow) => void;
}

export const SignInCard = ({setState} : SignInCardProps) => {

    const { signIn } = useAuthActions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleProviderSignIn = (value: "github" | "google") => {
        signIn(value);
    }

    return(
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>  
                    Login to continue
                </CardTitle>
                <CardDescription> 
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input 
                        disabled={false}
                        value={email}
                        placeholder="Email"
                        type="email"
                        required
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <Input 
                        disabled={false}
                        value={password}
                        placeholder="Password"
                        type="password"
                        required
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        size={"lg"}
                        disabled={false}
                    >
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        size={"lg"}
                        disabled={false}
                        onClick={() => {handleProviderSignIn("google")}}
                        variant={"outline"}
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-3 left-2.5"/>
                        Continue with Google
                    </Button>
                    <Button
                        size={"lg"}
                        disabled={false}
                        onClick={() => {handleProviderSignIn("github")}}
                        variant={"outline"}
                        className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute top-3 left-2.5"/>
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">&nbsp;Sign up</span>
                </p>
            </CardContent>
        </Card>
    )
}