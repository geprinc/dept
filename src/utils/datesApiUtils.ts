export const getImageURL = (date: string, image: string, extension: string = 'png') => {
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8, 10);
    return `https://epic.gsfc.nasa.gov/archive/enhanced/${year}/${month}/${day}/${extension}/${image}.${extension}`;
}