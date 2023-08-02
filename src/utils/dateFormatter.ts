export default function dateFormatter(inputDate: string) {
    const date = new Date(inputDate)

    const formattedDate = date.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    });

    return formattedDate.replace(/^0+/, '');
}