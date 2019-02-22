export const camelCased = (myString) => (
    myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);