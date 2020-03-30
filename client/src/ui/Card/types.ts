import { CardProps as AntCardProps } from 'antd/lib/card';

export type CardProps = AntCardProps & {
    fillContainer?: boolean;
    maxHeight?: number;
    primary?: boolean
};