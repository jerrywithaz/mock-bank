function notAnError<T>(x: T | Error): x is T {
    return !(x instanceof Error);
}

export default notAnError;