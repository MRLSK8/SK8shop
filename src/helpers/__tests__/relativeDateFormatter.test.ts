import { relativeDateFormatter } from '~/helpers';

describe('Formatting relative dates', () => {
	it("should format from 10 to 'em 10 dias'", () => {
		expect(relativeDateFormatter(10)).toBe('em 10 dias');
	});
	it("should format from -10 to 'há 10 dias'", () => {
		expect(relativeDateFormatter(-10)).toBe('há 10 dias');
	});
	it("should format from -1 to 'ontem'", () => {
		expect(relativeDateFormatter(-1)).toBe('ontem');
	});
	it("should format from -2 to 'anteontem'", () => {
		expect(relativeDateFormatter(-2)).toBe('anteontem');
	});
	it("should format from -3 to 'há 3 dias'", () => {
		expect(relativeDateFormatter(-3)).toBe('há 3 dias');
	});
	it("should format from 3 to 'em 3 dias'", () => {
		expect(relativeDateFormatter(3)).toBe('em 3 dias');
	});
	it("should format from 2 to 'depois de amanhã'", () => {
		expect(relativeDateFormatter(2)).toBe('depois de amanhã');
	});
	it("should format from relativeDateFormatter(1, 'months') to 'próximo mês'", () => {
		expect(relativeDateFormatter(1, "months")).toBe('próximo mês');
	});
	it("should format from relativeDateFormatter(-1, 'months') to 'mês passado'", () => {
		expect(relativeDateFormatter(-1, "months")).toBe('mês passado');
	});
	it("should format from relativeDateFormatter(4, 'year') to 'em 4 anos'", () => {
		expect(relativeDateFormatter(4, "year")).toBe('em 4 anos');
	});
});
