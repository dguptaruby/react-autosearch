export const debounce = (cb, wait) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => cb(...args), wait);
    }
}