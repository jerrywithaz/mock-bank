export type FaceDetectionProps = {
    onFaceDetected: (image: HTMLImageElement) => void,
    onFaceNotDetected: () => void,
    onSubmit: (image: HTMLImageElement) => void;
    title?: string
}