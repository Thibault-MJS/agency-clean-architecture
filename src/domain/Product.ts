import { Price } from "./Price";

export class Product {
    constructor(
        public id: string,
        public name: string,
        public content: string,
        public price: Price
    ) {
        ["id", "name", "content"].forEach((key: string) => {
            if ((this[key as keyof Product] as string).trim().length == 0) {
                throw new Error(`Product ${key} must not be blank.`);
            }
        });
    }
}