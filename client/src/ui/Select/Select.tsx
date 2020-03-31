import React from 'react';
import { Select as AntSelect } from 'antd';
import { SelectProps } from './types';

import * as Styled from './style';

const Select = (props: SelectProps) => {
    return (
        <Styled.Select {...props}/>
    );
}

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

export default Select;