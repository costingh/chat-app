export const getQueryParam = (key) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key) || '';
};

export default {
    getQueryParam,
}