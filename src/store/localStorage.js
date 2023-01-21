const getLocalStorage = (KEY) => JSON.parse(localStorage.getItem(KEY));

const setLocalStorageObj = (KEY, value) => {
    const oldStorage = getLocalStorage(KEY);
    const newStorage = { ...oldStorage, ...value };
    localStorage.setItem(KEY, JSON.stringify(newStorage));
};

const setLocalStorage = (KEY, value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

const initLocalStorage = (KEY, value) =>
    getLocalStorage(KEY) || setLocalStorage(KEY, value);

export {
    getLocalStorage,
    setLocalStorage,
    setLocalStorageObj,
    initLocalStorage,
};
