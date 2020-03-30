import React from 'react';
import { Avatar, Layout, Input, Badge } from 'antd';
import { MessageFilled, BellFilled } from '@ant-design/icons';

import * as Styled from './style';

const Header = () => {

    return (
        <Styled.Header>
            <Layout.Header>
                <Styled.Search>
                    <Input.Search
                        placeholder="Search..."
                        style={{ width: 300 }} />
                </Styled.Search>
                <Styled.Icons>
                    <Styled.Icon>
                        <Badge count={5} dot>
                            <Avatar style={{ background: "transparent" }} icon={<BellFilled />} />
                        </Badge>
                    </Styled.Icon>
                    <Styled.Icon>
                        <Badge count={5} dot>
                            <Avatar style={{ background: "transparent" }} icon={<MessageFilled />} />
                        </Badge>
                    </Styled.Icon>
                    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Styled.Icons>
            </Layout.Header>
        </Styled.Header>
    );

}

export default Header;