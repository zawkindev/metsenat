export function formatMoney(number) {

    let strNumber = number.toString();
    
    let formattedInteger = '';
    
    let count = 0;

    for (let i = strNumber.length - 1; i >= 0; i--) {
        formattedInteger = strNumber[i] + formattedInteger;
        count++;
        if (count % 3 === 0 && i !== 0) {
            formattedInteger = ' ' + formattedInteger; // Add a space after every third digit
        }
    }
    
    return formattedInteger;
}
