import { Price } from '../src/domain/Price';
import { Product } from '../src/domain/Product';

describe('Product', () => {
    it('should be created', () => {
        const id = "001";
        const name = "Immeuble";
        const content = "Un petit immeuble en ville";
        const price = new Price(1500); 
        const product = new Product(id, name, content, price);
        expect(product.id).toEqual(id);
        expect(product.name).toEqual(name);
        expect(product.content).toEqual(content);
        expect(product.price).toEqual(price);
    });
});
