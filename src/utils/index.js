export function formatMoney(number) {
    // Convert number to string
  const strNumber = String(number);

  // Initialize formatted string
  let formattedNumber = "";

  // Iterate over each character of the string from right to left
  for (let i = strNumber.length - 1, count = 0; i >= 0; i--) {
    // Append the current character to the formatted string
    formattedNumber = strNumber[i] + formattedNumber;

    // Increment the count
    count++;

    // Add a space after every third digit, except for the first digit
    if (count % 3 === 0 && i !== 0) {
      formattedNumber = " " + formattedNumber;
    }
  }

  return formattedNumber;}

console.log("money:::: ", formatMoney(1222));

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function generatePaginationData(
  currentPagination,
  totalCardNumber,
  currentPageCardsNumber,
) {
  const lastPagination = Math.ceil(totalCardNumber / currentPageCardsNumber);
  const firstPagination = 1;

  let leftSide = [];
  let rightSide = [];

  if (currentPagination - firstPagination > 3) {
    leftSide = [firstPagination, "...", currentPagination - 1];
  } else {
    for (let i = firstPagination; i < currentPagination; i++) {
      leftSide.push(i);
    }
  }
  if (lastPagination - currentPagination > 3) {
    rightSide = [currentPagination + 1, "...", lastPagination];
  } else {
    for (let i = currentPagination + 1; i <= lastPagination; i++) {
      rightSide.push(i);
    }
  }

  return [...leftSide, currentPagination, ...rightSide];
}

export function getImgUrl(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}
