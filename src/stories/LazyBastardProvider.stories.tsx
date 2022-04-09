import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LazyBastard } from "../LazyBastard";
import { LazyBastardProvider } from "../Provider";
import { ScrollDown } from "./components/ScrollDown";
import { Lipsum } from "./components/Lipsum";
import "./LazyBastard.css";
import "./common.css";
import "./LazyBastardProvider.css";

const TestComponent = React.lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                import("./ExampleComponent").then((data: any) => resolve(data));
            }, 1500);
        })
);

export default {
    title: "Example/LazyBastardProvider",
    component: LazyBastardProvider,
    argTypes: {
        loader: {},
        children: {},
        rootMargin: {},
        threshold: {},
    },
} as ComponentMeta<typeof LazyBastardProvider>;

const Template: ComponentStory<typeof LazyBastardProvider> = (args) => (
    <>
        <LazyBastardProvider {...args}>
            <h2>What is this for?</h2>
            <p>Provider allows you to scustomize globally some parameters:</p>
            <ul className="feature-props">
                <li>loader</li>
                <li>rootMargin</li>
                <li>threshold</li>
            </ul>
            <p style={{ marginBottom: "50px" }}>
                For more information on how to use rootMargin and threshold,
                <br />
                see{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
                    target="_blank"
                >
                    https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
                </a>
                .
            </p>
            <ScrollDown />
            <Lipsum />
            <div className="long-block">
                <div>
                    <LazyBastard height={100}>
                        <TestComponent name="Eva" />
                    </LazyBastard>
                </div>
            </div>
            <Lipsum />
        </LazyBastardProvider>
    </>
);

export const Basic = Template.bind({});
Basic.args = {
    loader: <div>Loading....</div>,
    rootMargin: "0px",
    threshold: 1.0,
};
