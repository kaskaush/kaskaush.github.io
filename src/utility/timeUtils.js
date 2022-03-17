import 'moment-precise-range-plugin';
import moment from 'moment';

const getDateDifference = (start, end, short = false) => {
    start = moment(start, 'DD/MM/YYYY');
    end = end !== '' ? moment(end, 'DD/MM/YYYY') : moment();
    const { months, years } = moment.preciseDiff(start, end, true);
    let resultStr = '';
    if (short) {
        if (years && years > 0) {
            resultStr += `${years}`;
        }
        if (months && months > 0) {
            resultStr += `.${months}`;
        }
        return resultStr;
    } else {
        if (years && years > 0) {
            resultStr += `${years} year${years > 1 ? 's' : ''} `;
        }
        if (months && months > 0) {
            resultStr += `${months} month${months > 1 ? 's' : ''}`;
        }
        return resultStr;
    }
};

export { getDateDifference };
