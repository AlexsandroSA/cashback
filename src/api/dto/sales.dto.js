import { strintFormat } from '../../utils/helpers';

export function toApi(data = '') {
    if (!data) return '';

    return strintFormat.removeSpecialCharacters(data);
}
export function fromApi(data = null) {
    if (!data) return 0;

    return data.body.credit
};
