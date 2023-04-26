import { currencyFormatter } from '~/helpers';

describe('Currency formatter helper', () => {
	it('should format from 10 to R$ 10,00', () => {
		expect(currencyFormatter(10)).toBe('R$ 10,00');
	});

	it('should format from 25.23 to R$ 25,23', () => {
		expect(currencyFormatter(25.23, false)).toBe('25,23');
	});

	it('should format from 25.233 to R$ 25,23', () => {
		expect(currencyFormatter(25.233, false)).toBe('25,23');
	});

	it('should format from 0 to R$ 0,00', () => {
		expect(currencyFormatter(0, false)).toBe('0,00');
	});

	it('should format from 0.5 to R$ 0,50', () => {
		expect(currencyFormatter(0.5, false)).toBe('0,50');
	});

	it('should format from 36.6 to R$ 36,60', () => {
		expect(currencyFormatter(36.6, false)).toBe('36,60');
	});

	it('should format from 1002.52 to R$ 1.002,52', () => {
		expect(currencyFormatter(1002.52, false)).toBe('1.002,52');
	});

	it('should format from 100252 to R$ 100.252', () => {
		expect(currencyFormatter(100252, false)).toBe('100.252,00');
	});

	it('should format from 13500252 to R$ 13.500.252', () => {
		expect(currencyFormatter(13500252, false)).toBe('13.500.252,00');
	});
});
