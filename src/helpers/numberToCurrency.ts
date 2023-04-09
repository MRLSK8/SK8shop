export const numberToCurrency = (value: number) => {
	if (!value) return '';

	return `R$ ${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
}
