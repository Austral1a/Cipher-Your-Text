interface CipherConstructor {
    new (_input: string, _output: string): ICipher
}

interface ICipher {
    readonly alphabetRU: {[index: string]: string};
    encode(): string;
    decode(): string;
}