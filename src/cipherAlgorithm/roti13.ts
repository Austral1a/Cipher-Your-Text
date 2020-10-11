interface CipherConstructor {
    (_input: string, _output: string): ICipher
}

interface ICipher {
    readonly alphabetRU: {[index: string]: string};
    encode(): string;
    decode(): string;
}