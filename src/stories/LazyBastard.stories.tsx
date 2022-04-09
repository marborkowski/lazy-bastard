import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LazyBastard } from "../LazyBastard";
import { ScrollDown } from "./components/ScrollDown";
import { Lipsum } from "./components/Lipsum";
import './LazyBastard.css';
import "./common.css";

const TestComponent = React.lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                import("./ExampleComponent").then((data: any) => resolve(data));
            }, 1500);
        })
);

export default {
    title: "Example/LazyBastard",
    component: LazyBastard,
    description: 'sasasa',
    argTypes: {
        height: { control: 'number', defaultValue: 160 },
        children: {}
    },
} as ComponentMeta<typeof LazyBastard>;

const Template: ComponentStory<typeof LazyBastard> = (args) => (
    <>
        <ScrollDown />
        <Lipsum />
        <div className="long-block">
            <div>
                <LazyBastard {...args}>
                    <TestComponent name="Eva" />
                </LazyBastard>
            </div>
        </div>
        <Lipsum />
    </>
);

export const Primary = Template.bind({});
