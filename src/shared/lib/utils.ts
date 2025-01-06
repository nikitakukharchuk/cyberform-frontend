/**
 * Форматирует дату из строки ISO 8601 в формат "HH:mm:ss YYYY-MM-DD"
 * @param isoDate - строка в формате ISO 8601
 * @returns строка в формате "HH:mm:ss YYYY-MM-DD"
 */
function formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${year}-${month}-${day}`;
}

export { formatDate };

