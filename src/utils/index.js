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

  return formattedNumber;
}

console.log("money:::: ", formatMoney(1222));

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function generatePaginationData(currentPage, totalCards, cardsPerPage) {
  const lastPage = Math.ceil(totalCards / cardsPerPage);
  const firstPage = 1;

  let leftSide = [];
  let rightSide = [];

  if (currentPage - firstPage > 3) {
    leftSide = [firstPage, "...", currentPage - 1];
  } else {
    for (let i = firstPage; i < currentPage; i++) {
      leftSide.push(i);
    }
  }
  if (lastPage - currentPage > 3) {
    rightSide = [currentPage + 1, "...", lastPage];
  } else {
    for (let i = currentPage + 1; i <= lastPage; i++) {
      rightSide.push(i);
    }
  }

  console.log("paginationDATA: ", currentPage, totalCards, cardsPerPage, lastPage);

  return [...leftSide, currentPage, ...rightSide];
}

export function getImgUrl(img) {
  return new URL(`../assets/images/${img}`, import.meta.url).href;
}
