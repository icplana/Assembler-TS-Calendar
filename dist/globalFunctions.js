export function formatToReadableTime(date) {
    const hour = (date.getHours()).toString().length < 2 ? '0' + date.getHours() : date.getHours();
    const minute = (date.getMinutes()).toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes();
    const readableTime = hour + ':' + minute;
    return readableTime;
}
export function formatToReadableDate(date) {
    const day = date.getDate().toString().length < 2 ? '0' + date.getDate().toString() : date.getDate().toString();
    const month = (date.getMonth() + 1).toString().length < 2 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();
    const readableDate = day + '/' + month + '/' + year;
    return readableDate;
}
export function getEventsFromLS() {
    const LSData = localStorage.getItem('calendar');
    const events = JSON.parse(LSData).eventList || [];
    return events;
}
