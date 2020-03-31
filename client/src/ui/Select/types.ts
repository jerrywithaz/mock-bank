import { SelectProps as AntSelectProps } from "antd/lib/select";

export type SelectProps<VT = any> = AntSelectProps<VT> & { 
    fullWidth?: boolean
};