const calculateSum = (cards) => {
    let sum = 0;
    let aceCount = 0;
    cards?.forEach(card => {
        if (card.value === 'ACE') {
            aceCount++;
            sum += 11;
        } else if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
            sum += 10;
        } else {
            sum += parseInt(card.value);
        }
    });
    while (aceCount > 0 && sum > 21) {
        sum -= 10;
        aceCount--;
    }

    return sum;
}

export const utilsService = {
    calculateSum
}