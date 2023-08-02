export default function smallFontTemp(temp: number) {
    const decimalPart = temp.toString().split('.')[1];

    const hasOneDecimalPlace = decimalPart != undefined ? decimalPart.length > 1 : false

    return temp >= 100 || hasOneDecimalPlace
}