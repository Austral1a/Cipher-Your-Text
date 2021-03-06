export default function rotiDecode(input) {

    const alphabet = {
        'м': 'а',
        'н': 'б',
        'о': 'в',
        'п': 'г',
        'р': 'д',
        'с': 'е',
        'т': 'ё',
        'у': 'ж',
        'ф': 'з',
        'х': 'и',
        'ц': 'й',
        'ч': 'к',
        'ш': 'л',
        'щ': 'м',
        'ъ': 'н',
        'ы': 'о',
        'ь': 'п',
        'э': 'р',
        'ю': 'с',
        'я': 'т',
        'а': 'у',
        'б': 'ф',
        'в': 'х',
        'г': 'ц',
        'д': 'ч',
        'е': 'ш',
        'ё': 'щ',
        'ж': 'ъ',
        'з': 'ы',
        'и': 'ь',
        'й': 'э',
        'к': 'ю',
        'л': 'я',
        ' ': ' '
    }

    return input.split('').map(char => {
        char = alphabet[char.toLowerCase()];
        return char;
    }).join('')

}

