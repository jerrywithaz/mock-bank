import styled from 'styled-components';

export const FaceDetectionFrame = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    margin: 0 auto;
`;

export const FaceDetectionVideo = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const FaceDetectionCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`;