export class Price {
    constructor(
        public amount: number,
        public currency: string = '€'
    ) {
        if (amount <= 0) {
            throw new Error('amount must be higher than 0');
        }
    }
}