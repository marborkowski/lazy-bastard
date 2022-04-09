import * as React from "react";
export interface ContextProps {
    loader?: JSX.Element | null | string;
    rootMargin?: string;
    threshold?: number;
    root?: HTMLElement;
}
export declare const LazyContext: React.Context<ContextProps>;
interface Props extends ContextProps {
    children: JSX.Element | JSX.Element[];
    loader?: JSX.Element;
}
export declare const LazyBastardProvider: React.FC<Props>;
export {};
