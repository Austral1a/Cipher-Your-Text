export default function asciiEncode(input) {
    let arr = input.split(' ');
    return String.fromCharCode(...arr)
}