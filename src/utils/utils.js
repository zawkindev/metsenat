export function formatMoney(number = "") {
	const strNumber = number.toString();

	let formattedInteger = "";

	let count = 0;

	for (let i = strNumber.length - 1; i >= 0; i--) {
		formattedInteger = strNumber[i] + formattedInteger;
		count++;
		if (count % 3 === 0 && i !== 0) {
			formattedInteger = " " + formattedInteger; // Add a space after every third digit
		}
	}

	return formattedInteger;
}

export function formatDate(dateString) {
	const date = new Date(dateString);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();
	return `${day}.${month}.${year}`;
}

export function generatePaginationData(currentPagination, totalCardNumber) {
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
