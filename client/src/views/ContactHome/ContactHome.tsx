import React, { FunctionComponent } from 'react';
import Card from 'ui/Card';
import { ContactHomeProps } from './types';

import * as Styled from './style';

const ContactHome: FunctionComponent<ContactHomeProps> = () => {
    return (
        <Styled.ContactHome>
            <Card title="Contact Us" fillContainer>
                
            </Card>
        </Styled.ContactHome>
    );
}

export default ContactHome;