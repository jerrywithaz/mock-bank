type CreditCardGeneratorOptions = {
    issuer: "visa" | "mastercard" | "amex" | "discover",
    useLongVisa?: boolean
}

function createCreditCard({
    issuer,
    useLongVisa
}: CreditCardGeneratorOptions) {

    var pos;
    var cardNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var checksum = 0;
    var final_digit = 0;
    var t = 0;
    var len_offset = 0;
    var cardLength = 0;

    //
    // Fill in the first values of the string based with the specified bank's prefix.
    //

    if (issuer === "visa") {
        cardNumbers[0] = 4;
        pos = 1;
        if (useLongVisa) {
            cardLength = 16;
        }
        else {
            cardLength = 13;
        }
    }
    else if (issuer === "mastercard") {
        cardNumbers[0] = 5;
        t = Math.floor(Math.random() * 5) % 5;
        cardNumbers[1] = 1 + t;	  // Between 1 and 5.
        pos = 2;
        cardLength = 16;
    }
    else if (issuer === "amex") {
        cardNumbers[0] = 3;
        t = Math.floor(Math.random() * 4) % 4;
        cardNumbers[1] = 4 + t;	  // Between 4 and 7.
        pos = 2;
        cardLength = 15;
    }
    else if (issuer === "discover") {
        cardNumbers[0] = 6;
        cardNumbers[1] = 0;
        cardNumbers[2] = 1;
        cardNumbers[3] = 1;
        pos = 4;
        cardLength = 16;
    }

    //
    // Fill all the remaining numbers except for the last one with random values.
    //

    if (pos) {
        while (pos < cardLength - 1) {
            cardNumbers[pos++] = Math.floor(Math.random() * 10) % 10;
        }
    }
    

    //
    // Calculate the Luhn checksum of the values thus far.
    //

    len_offset = (cardLength + 1) % 2;
    for (pos = 0; pos < cardLength - 1; pos++) {
        if ((pos + len_offset) % 2) {
            t = cardNumbers[pos] * 2;
            if (t > 9) {
                t -= 9;
            }
            checksum += t;
        }
        else {
            checksum += cardNumbers[pos];
        }
    }

    //
    // Choose the last digit so that it causes the entire string to pass the checksum.
    //

    final_digit = (10 - (checksum % 10)) % 10;
    cardNumbers[cardLength - 1] = final_digit;

    console.log(final_digit);
    console.log(cardNumbers);
    
    
    // Output the CC value.
    const cardNumber: string = cardNumbers.join('').substr(0, cardLength);

    return cardNumber;

}

export default createCreditCard;