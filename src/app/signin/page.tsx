"use client"

import AuthOptions from "@/components/SignIn/AuthOptions";
import Stats from "@/components/SignIn/Stats";

import './styles.scss'

const SignIn = () => {
    return (
        <div className="signin-parent">
            <Stats />
            <AuthOptions />
        </div>
    )
}
export default SignIn;
