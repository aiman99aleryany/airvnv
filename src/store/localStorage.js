const getLocalStorage = (KEY) => JSON.parse(localStorage.getItem(KEY));

const setLocalStorage = (KEY, value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

const initLocalStorage = (KEY, value) =>
    getLocalStorage(KEY) || setLocalStorage(KEY, value);

export { getLocalStorage, setLocalStorage, initLocalStorage };
