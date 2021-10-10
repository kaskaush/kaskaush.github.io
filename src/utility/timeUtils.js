import 'moment-precise-range-plugin';
import moment from 'moment';

const getDateDifference = (start, end) => {
    start = moment(start, 'DD/MM/YYYY');
    end = end !== '' ? moment(end, 'DD/MM/YYYY') : moment();
    const { months, years } = moment.preciseDiff(start, end, true);
    let resultStr = '';
    if (years && years > 0) {
        resultStr += `${years} year${years > 1 ? 's' : ''} `;
    }
    if (months && months > 0) {
        resultStr += `${months} month${months > 1 ? 's' : ''}`;
    }
    return resultStr;
};

export { getDateDifference };
