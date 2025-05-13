export class Payment{
    constructor(
        public readonly idPayment: number,
        public datePayment: Date = new Date(),
        public montant: number,
        public modePayment: 'carte' | 'paypal' | 'virement',
        public refTransaction : string,
    ){}
}