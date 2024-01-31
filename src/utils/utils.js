export function formatMoney(number="") {

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

export function formatDate(datee) {
  const date = new Date(datee)
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
