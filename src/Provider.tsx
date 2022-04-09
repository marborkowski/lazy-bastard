import * as React from "react";

export interface ContextProps {
    loader?: JSX.Element | null | string;
    rootMargin?: string;
    threshold?: number;
    root?: HTMLElement;
}

export const LazyContext = React.createContext<ContextProps>({
    loader: null,
    root: undefined,
    rootMargin: "0px",
    threshold: 1.0,
});

interface Props extends ContextProps {
    children: JSX.Element | JSX.Element[];
    loader?: JSX.Element;
}

export const LazyBastardProvider: React.FC<Props> = ({
    children,
    loader = null,
    root,
    rootMargin,
    threshold,
}) => {
    return (
        <LazyContext.Provider value={{ loader, root, rootMargin, threshold }}>
            {children}
        </LazyContext.Provider>
    );
};
