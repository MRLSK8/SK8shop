import { dateFormatter } from '~/helpers';

describe('Date formatter helper', () => {
	it("should format from new Date(2023, 3, 21) to '21/04/2023'", () => {
		expect(dateFormatter(new Date(2023, 3, 21))).toBe('21/04/2023');
	});

	it("should format from '2023-09-02' to '02/09/2023'", () => {
		expect(dateFormatter('2023-09-02')).toBe('02/09/2023');
	});

	it("should format from '2019-01-25T10:30:00.000Z' to '25/01/2019'", () => {
		expect(dateFormatter('2019-01-25T10:30:00.000Z')).toBe('25/01/2019');
	});

	it("should format from '02/09/2023' to '02/09/2023'", () => {
		expect(dateFormatter('02/09/2023')).toBe('02/09/2023');
	});

	it("should get '2023/09/02' and to return '02/09/2023'", () => {
		expect(dateFormatter('2023/09/02')).toBe('02/09/2023');
	});

	it("should get '02kfd09fdk2023' and to return 'Invalid date'", () => {
		expect(dateFormatter('02kfd09fdk2023')).toBe('Invalid Date');
	});
});
