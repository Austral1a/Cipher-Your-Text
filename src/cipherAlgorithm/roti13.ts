interface CipherConstructor {
    new (_input: string, _output: string): ICipher
}

interface ICipher {
    readonly alphabetRU: {[index: string]: string};
    encode(): string;
    decode(): string;
}

const Cipher: CipherConstructor = class Cipher implements ICipher {
    readonly alphabetRU = {
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
        'я': 'л'
    }
    constructor(private _input: string, private _output: string) {}

    private get input(): string {
        return this._input
    }

    private get output(): string {
        return this._output
    }
    private set output(newOutput: string) {
        this._output = newOutput
    }

    encode() {
        let newOutput: string = ''
        this._input.toLowerCase().split('').forEach((e) => {
            if(this.alphabetRU[e]) {
                newOutput += this.alphabetRU[e]
            } else {
                newOutput += e
            }
        })
        this.output = newOutput
        return this.output
    }

    decode() {
        return this._input
    }
}