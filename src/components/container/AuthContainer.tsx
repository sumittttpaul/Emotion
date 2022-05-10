import * as React from "react";

export interface LayoutProps  { 
    children: React.ReactNode
}

const AuthContainer = (props: LayoutProps) => {
    return(
        <div className="flex sm:p-[32px] items-center justify-center h-screen w-screen main-auth">
            <div className="bg-[#202020] absolute sm:relative w-full h-full p-5 sm:p-0 sm:h-auto sm:max-w-[470px] flex flex-col items-center justify-center">
                {props.children}
            </div>
        </div>
    )
}

export default AuthContainer;