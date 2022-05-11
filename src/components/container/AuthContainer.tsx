import * as React from "react";

export interface LayoutProps  { 
    children: React.ReactNode
}

const AuthContainer = (props: LayoutProps) => {
    return(
        <div className="flex sm:p-[32px] items-center justify-center h-full sm:h-screen w-screen main-auth">
            <div className="bg-[#202020] w-full h-full px-5 py-14 sm:px-0 sm:h-auto sm:max-w-[470px] flex flex-col justify-center items-center">
                {props.children}
            </div>
        </div>
    )
}

export default AuthContainer;