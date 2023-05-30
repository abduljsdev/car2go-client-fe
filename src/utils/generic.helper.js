
export const extractDate = (dateTimeString) => {
    const dateObj = new Date(dateTimeString);
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if necessary
    const day = dateObj.getDate().toString().padStart(2, '0'); // Add leading zero if necessary
    return `${year}-${month}-${day}`;
};

export function extractTime(dateTimeString) {
    const dateObj = new Date(dateTimeString);

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}