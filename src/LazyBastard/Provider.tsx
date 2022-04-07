import * as React from "react";

interface ContextProps {
    loader?: JSX.Element | null | string;
    rootMargin?: string;
    threshold?: number;
}

export const ThemeContext = React.createContext<ContextProps>({
    loader: null,
    rootMargin: "0px",
    threshold: 1.0
});

interface Props {
    children: JSX.Element | JSX.Element[];
    loader?: JSX.Element;
}

export const LazyBastardProvider: React.FC<Props> = ({ children, loader = null }) => {
    return <ThemeContext.Provider value={{ loader }}>
        {children}
    </ThemeContext.Provider>
}