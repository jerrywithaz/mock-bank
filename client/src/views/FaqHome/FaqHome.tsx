import React, { FunctionComponent } from 'react';
import { List, Avatar, Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined, StarOutlined, LikeOutlined } from '@ant-design/icons';
import Card from 'ui/Card';
import { FaqHomeProps } from './types';
import faqs from './faqs';

import * as Styled from './style';

const FaqHome: FunctionComponent<FaqHomeProps> = () => {
    return (
        <Styled.FaqHome>
            <Card title="Frequently Asked Questions" fillContainer>
                <List
                    size="large"
                    dataSource={faqs}
                    itemLayout="vertical"
                    renderItem={faq => (
                        <List.Item
                            key={faq.question}
                            actions={[
                                <Tooltip key={"action-favorite"} title="Favorite">
                                    <StarOutlined />
                                </Tooltip>,
                                <Tooltip key={"action-like"} title="Like">
                                    <LikeOutlined />
                                </Tooltip>,
                            ]}>
                            <List.Item.Meta
                                avatar={<Avatar icon={<QuestionCircleOutlined />} />}
                                title={faq.question}
                                description={<><Tag color="green">Support</Tag></>} />
                            {faq.answer}
                        </List.Item>
                    )} />
            </Card>
        </Styled.FaqHome>
    );
}

export default FaqHome;