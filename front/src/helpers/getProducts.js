export async function getProducts() {
    try {
        const res = await fetch('/products.json', {
            method: "GET"
        })
        const products = await res.json();
        return products;
    } catch (error) {
        throw new Error(error)
    }
};