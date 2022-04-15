export const isPassword = (value) => {
    if (typeof value !== 'string') {
        return false;
    }

    const replaced = value.replace(/[^a-z0-9]/gi, '');
    if (value !== replaced || value.length < 6) {
        return false;
    }

    return true;
};
