import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

export interface ProfileURLInterface {
    URL: string
    change: boolean
}

const ProfileURLContext = createContext({
    ProfileURL: {} as Partial<ProfileURLInterface>,
    setProfileURL: {} as Dispatch<SetStateAction<Partial<ProfileURLInterface>>>,
});

const ProfileURLState = ({
    children,
    value = {} as ProfileURLInterface,
}: {
    children: React.ReactNode;
    value?: Partial<ProfileURLInterface>;
}) => {
    const [ProfileURL, setProfileURL] = useState(value);
    return (
        <ProfileURLContext.Provider value={{ ProfileURL, setProfileURL }}>
        {children}
        </ProfileURLContext.Provider>
    );
};

const useProfileURLState = () => {
    const context = useContext(ProfileURLContext);
    if (!context) {
        throw new Error("useProfileURLState must be used within a ProfileURLContext");
    }
    return context;
};

export { ProfileURLState, useProfileURLState };