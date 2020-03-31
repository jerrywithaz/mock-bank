import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import { Modal } from 'antd';
import showFaceTracker from './utils';
import { FaceDetectionProps } from './types';

import * as Styled from './style';

const FaceDetection: FunctionComponent<FaceDetectionProps> = (props) => {

    const [faceDetected, setFaceDetected] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    function onFaceDetected() {
        setFaceDetected(true);
        props.onFaceDetected(null as any);
    }

    function onFaceNotDetected() {
        setFaceDetected(false);
        props.onFaceNotDetected();
    }

    useEffect(() => {
        if (videoRef.current && canvasRef.current) {
            showFaceTracker(
                canvasRef.current, 
                onFaceDetected, 
                onFaceNotDetected
            );
        }
    }, [videoRef.current, canvasRef.current]);

    return (
        <Modal
            title={props.title || "Submit a Photo of Your Face to Continue"}
            visible={true}
            okText={"Submit Face"}
            onOk={() => { }}
            onCancel={() => {}}
            okButtonProps={{disabled: !faceDetected}}>
                <Styled.FaceDetectionFrame>
                    <Styled.FaceDetectionVideo id="face-detection" ref={videoRef} autoPlay loop muted width={300} height={300} />
                    <Styled.FaceDetectionCanvas ref={canvasRef} width={300} height={300}/>
                </Styled.FaceDetectionFrame>
        </Modal>
    );

}

export default FaceDetection;