import React, { FunctionComponent } from 'react';
import { ButtonGroupProps } from './types';

import * as Styled from './style';

const ButtonGroup: FunctionComponent<ButtonGroupProps> = (props) => {
    return (
        <Styled.ButtonGroup {...props}/>
    );
}

export default ButtonGroup;