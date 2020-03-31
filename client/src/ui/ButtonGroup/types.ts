import { ButtonGroupProps as AntButtonGroupProps } from "antd/lib/button";

export type ButtonGroupProps = AntButtonGroupProps & {
    align?: "start" | "end"
};