/**
 * Loads an image.
 * @param url The URL to load.
 * @returns The loaded image.
 */
export function load(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        img.onerror = reject;
        img.src = url;
    });
}
/**
 * Loads an ImageBitmap.
 * @param url The URL to load.
 * @returns The loaded ImageBitmap.
 */
export async function loadBitmap(url) {
    return await createImageBitmap(await load(url));
}
