import * as React from "react";
import "./styles.css";
interface Props {
    children: JSX.Element;
    height?: number;
    onLoad?: () => void;
}
export declare const LazyBastard: React.FC<Props>;
export {};
