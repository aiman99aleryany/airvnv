const getLocalStorage = (KEY) => JSON.parse(localStorage.getItem(KEY));

const setLocalStorage = (KEY, value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

const initLocalStorage = (KEY) =>
    getLocalStorage(KEY) || setLocalStorage(KEY, []);

export { getLocalStorage, setLocalStorage, initLocalStorage };
