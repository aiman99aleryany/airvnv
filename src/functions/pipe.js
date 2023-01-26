const pipe = (...fns) => {
    return (value) => {
        return fns.reduce((fn) => fn(value), value);
    };
};

const asyncPipe = (...fns) => {
    return (value) => {
        return fns.reduce(async (fn) => await fn(value), value);
    };
};

export { pipe, asyncPipe };
