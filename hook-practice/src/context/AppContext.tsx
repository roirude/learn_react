import { createContext } from "react";

export const AppContext = createContext<{ phone: string; name: string } | undefined>(undefined);


interface ContextProviderProps {
    children: React.ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
    const phone: string = "+1 123456789";
    const name: string = "John doe";
    return (
        <AppContext.Provider value={{ phone, name }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default ContextProvider