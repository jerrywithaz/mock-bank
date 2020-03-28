import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { MailHomeProps } from './types';
import { ROUTE_MAIL_ITEM, ROUTE_MAIL_HOME } from '../../routes';
import Switch from '../../components/Switch';
import { Div } from '../../components/HTMLElementRepeater';

const MailHome: FunctionComponent<MailHomeProps> = (props) => {
    return (
        <div>
            Mail
            <Switch>
                <Route exact path={ROUTE_MAIL_HOME} component={() => null}/>
                <Route exact path={ROUTE_MAIL_ITEM} component={() => <Div>Mail id</Div>}/>
            </Switch>
        </div>
    );
}

export default MailHome;