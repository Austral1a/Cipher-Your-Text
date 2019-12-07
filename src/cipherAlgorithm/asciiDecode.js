export default function asciiDecode(input) {
    input = input.split('').map(char => char.charCodeAt());
    return input.join(' ');
}