const toUnix = (date) => new Date(date).getTime();
const fromUnix = (unix) => new Date(unix);

export { toUnix, fromUnix };
