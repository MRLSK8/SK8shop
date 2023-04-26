export type ILocale = 'en-US' | 'pt-BR';

const defaultOptions: Intl.DateTimeFormatOptions = {
	timeZone: 'UTC',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
}

export const numberToCurrency = (value: number) => {
	if (!value) return 'R$ 0,00';

	return `R$ ${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
}

export const currencyFormatter = (currency = 0, withSymbol = true) => {
	let currencyValue = new Intl.NumberFormat('pt-BR', {
		currency: 'BRL',
		style: 'currency',
	}).format(currency);

	currencyValue = currencyValue.replace(/\xa0/g, ' '); // remove non-breaking space

	return withSymbol ? currencyValue : currencyValue.replace('R$', '').trim();
}

export const dateFormatter = (date: Date | string, formatOptions: Intl.DateTimeFormatOptions = defaultOptions) => {
	const regex = /^\d{2}\/\d{2}\/\d{4}$/;

	if (typeof date === 'string' && regex.test(date)) return date;

	const inputDate = new Date(date);
	if (isNaN(inputDate.getTime())) {
		return "Invalid Date";
	}

	return new Intl.DateTimeFormat('pt-BR', formatOptions).format(inputDate);
}

export const numberFormatter = (value: number, locale: ILocale = 'en-US') => {
	return new Intl.NumberFormat(locale, { notation: 'compact' }).format(value);
}

export const relativeDateFormatter = (value: number, period: Intl.RelativeTimeFormatUnit = 'day') => {
	return new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' }).format(value, period);
}


