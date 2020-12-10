import React from 'react';
import { Form, Checkbox, InputNumber } from 'antd';
import { useStupidShit } from 'providers/StupidShitProvider';

const Settings = () => {

    const stupidShit = useStupidShit();

    return (
        <Form initialValues={stupidShit}>
            <Form.Item label="Number of Seconds for Confirm Navigation" name="confirmNavigation">
                <InputNumber value={stupidShit.confirmNavigation} />
            </Form.Item>
            <Form.Item label="Number of Seconds for Confirm Transfer" name="confirmTransfer">
                <InputNumber value={stupidShit.confirmTransfer} />
            </Form.Item>
            <Form.Item label="Page Load Delay" name="pageLoadDelay">
                <InputNumber value={stupidShit.pageLoadDelay} />
            </Form.Item>
            <Form.Item label="Prevent Changing of HTML Values" name="preventChangingHTMLValues">
                <Checkbox checked={stupidShit.preventChangingHTMLValues} />
            </Form.Item>
            <Form.Item label="Number of Times to Repeat HTML Elements" name="repeatElements">
                <InputNumber value={stupidShit.repeatElements} />
            </Form.Item>
            <Form.Item label="Number of Seconds For Session Timeout" name="sessionTimeout">
                <InputNumber value={stupidShit.sessionTimeout} />
            </Form.Item>
            <Form.Item label="Show Random Advertisements" name="useAdvertisements">
                <Checkbox checked={stupidShit.useAdvertisements} />
            </Form.Item>
            <Form.Item label="Use Transparent Overlay" name="useTransparentOverlay">
                <Checkbox checked={stupidShit.useAdvertisements} />
            </Form.Item>
        </Form>
    );
};

export default Settings;