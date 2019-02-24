import local from '../../constants/locale';

export default function changeLocale(locale) {
    return local[locale];
}
