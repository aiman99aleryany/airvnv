const toUnix = (date) => new Date(date).getTime();

function fromUnix(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp);
    const date = a.toLocaleDateString();
    const dateArray = date.split('/');
    let temp = dateArray[0];
    dateArray[0] = dateArray[1];
    dateArray[1] = temp;

    return dateArray.join('/');
}

export { toUnix, fromUnix };
