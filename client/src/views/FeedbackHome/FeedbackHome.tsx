import React, { FunctionComponent } from 'react';
import Card from 'ui/Card';
import { FeedbackHomeProps } from './types';

import * as Styled from './style';

const FeedbackHome: FunctionComponent<FeedbackHomeProps> = () => {
    return (
        <Styled.FeedbackHome>
            <Card title="Give Us Feedback" fillContainer>
                
            </Card>
        </Styled.FeedbackHome>
    );
}

export default FeedbackHome;