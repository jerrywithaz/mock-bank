import React, { FunctionComponent } from 'react';
import { ContentProps } from './types';

import * as Styled from './style';

const Content: FunctionComponent<ContentProps> = ({ children }) => {
    return (
        <Styled.Content>
            {children}
        </Styled.Content>
    );
}

export default Content;