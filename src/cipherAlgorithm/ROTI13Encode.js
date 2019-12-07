export default function rotiEncode(input) {

    const alphabet = {
        'а': 'м',
        'б': 'н',
        'в': 'о',
        'г': 'п',
        'д': 'р',
        'е': 'с',
        'ё': 'т',
        'ж': 'у',
        'з': 'ф',
        'и': 'х',
        'й': 'ц',
        'к': 'ч',
        'л': 'ш',
        'м': 'щ',
        'н': 'ъ',
        'о': 'ы',
        'п': 'ь',
        'р': 'э',
        'с': 'ю',
        'т': 'я',
        'у': 'а',
        'ф': 'б',
        'х': 'в',
        'ц': 'г',
        'ч': 'д',
        'ш': 'е',
        'щ': 'ё',
        'ъ': 'ж',
        'ы': 'з',
        'ь': 'и',
        'э': 'й',
        'ю': 'к',
        'я': 'л',
        ' ': ' '
    }
    //а,б,в,г,д,е,ё,ж,з,и,й,к,л,м,н,о,п,р,с,т,у,ф,х,ц,ч,ш,щ,ъ,ы,ь,э,ю,я,

    return input.split('').map(char => {
        char = alphabet[char.toLowerCase()];
        return char;
    }).join('')

}
