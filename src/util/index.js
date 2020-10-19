import _isInteger from 'lodash/isInteger';
import _intersection from 'lodash/intersection';
import _difference from 'lodash/difference';

const FILTER_TYPE_SOME = 'some';

const FILTER_TYPE_EVERY = 'every';

export const filterCollection = (collection, responses) =>
    collection.filter((item) => {
        if (item.filter === undefined || item.filter === true) {
            return true;
        }

        if (_isInteger(item.filter)) {
            return responses.includes(item.filter);
        }

        if (item.filter.type === FILTER_TYPE_SOME) {
            return _intersection(item.filter.values, responses).length > 0;
        }

        if (item.filter.type === FILTER_TYPE_EVERY) {
            return _difference(item.filter.values, responses).length === 0;
        }

        throw new Error('Bad Implementation!');
    });
