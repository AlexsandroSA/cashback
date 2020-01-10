import { parserToMoney, removeSpecialCharacters } from './strintFormat';

describe('Helpers: strintFormat', () => {
    it('should call parserToMoney when param is undefined then return default value', () => {
        // should
        const value = parserToMoney();

        // when
        const expected = 'R$0.00';

        // then
        expect(value).toEqual(expected);
      });

    it('should call parserToMoney when param is 10 then return R$10.00', () => {
        // should
        const value = parserToMoney(10);

        // when
        const expected = 'R$10.00';

        // then
        expect(value).toEqual(expected);
      });

      it('should call removeSpecialCharacters when param is undefined then return ""', () => {
        // should
        const value = removeSpecialCharacters();

        // when
        const expected = '';

        // then
        expect(value).toEqual(expected);
      });

    it('should call removeSpecialCharacters when param is 10.10 then return 1000', () => {
        // should
        const value = removeSpecialCharacters('10.10');

        // when
        const expected = '1010';

        // then
        expect(value).toEqual(expected);
      });
})
