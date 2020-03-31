function showFaceTracker(canvas: HTMLCanvasElement, onFaceDetected: () => void, onFaceNotDetected: () => void) {

    const tracker = new window.tracking.ObjectTracker("face");
    window.tracking.track("#face-detection", tracker, { camera: true });

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    tracker.on('track', function (event: any) {

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (event.data.length === 0) {

            onFaceNotDetected();

        } else {

            onFaceDetected();

            event.data.forEach(function (rect: any) {
                context.strokeStyle = '#a64ceb';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
            });

        }


    });

}

export default showFaceTracker;