import React, { FunctionComponent } from 'react';
import { MailHomeProps } from './types';
import { ROUTE_MAIL_ITEM, ROUTE_MAIL_HOME } from 'routes';
import Switch from 'components/Switch';
import { Div } from 'components/HTMLElementRepeater';
import DelayedRoute from 'components/DelayedRoute';

const MailHome: FunctionComponent<MailHomeProps> = (props) => {
    return (
        <div>
            Mail
            <Switch>
                <DelayedRoute exact path={ROUTE_MAIL_HOME} component={() => null}/>
                <DelayedRoute exact path={ROUTE_MAIL_ITEM} component={() => <Div>Mail id</Div>}/>
            </Switch>
        </div>
    );
}

export default MailHome;