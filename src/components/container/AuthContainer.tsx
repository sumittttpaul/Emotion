import * as React from "react";

export interface LayoutProps  { 
    children: React.ReactNode
}

const AuthContainer = (props: LayoutProps) => {
    return(
        <div className="flex p-[32px] items-center justify-center h-screen w-full main-auth">
            <div className="bg-[#202020] w-full max-w-[470px] flex flex-col items-center justify-center">
                {props.children}
            </div>
        </div>
    )
}

export default AuthContainer;