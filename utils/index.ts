export const convertDate = (date: string): string => {
    const months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    };
    const date2 = date.substring(0, 10);
    const [year, month, day] = date2.split('-');
    return `${day} ${months[month]}, ${year}`;
};