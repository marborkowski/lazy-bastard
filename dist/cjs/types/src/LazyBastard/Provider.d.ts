import * as React from "react";
interface ContextProps {
    loader?: JSX.Element | null | string;
    rootMargin?: string;
    threshold?: number;
}
export declare const ThemeContext: React.Context<ContextProps>;
interface Props {
    children: JSX.Element | JSX.Element[];
    loader?: JSX.Element;
}
export declare const LazyBastardProvider: React.FC<Props>;
export {};
