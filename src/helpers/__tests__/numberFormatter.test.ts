import { numberFormatter } from '~/helpers';

describe('Number formatter helper', () => {
	it("should format from 10 to 10", () => {
		expect(numberFormatter(10)).toBe('10');
	});
	it("should format from 1000 to 1K", () => {
		expect(numberFormatter(1000)).toBe('1K');
	});
	it("should format from 10 to 10", () => {
		expect(numberFormatter(10000)).toBe('10K');
	});
	it("should format from 190000 to 190K", () => {
		expect(numberFormatter(190000)).toBe('190K');
	});
	it("should format from 4870000 to 4.9M", () => {
		expect(numberFormatter(4870000)).toBe('4.9M');
	});
	it("should format from -400 to -400", () => {
		expect(numberFormatter(-400)).toBe('-400');
	});
	it("should format from -49090 to 4.9M", () => {
		expect(numberFormatter(-49090)).toBe('-49K');
	});
});
