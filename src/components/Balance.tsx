/**
 * Interface for the props passed to the Balance component.
 * Defines the amount prop as a number, and the optional children prop as a string.
 */
export interface BalanceProps {
	amount: number;
	children?: string;
}

const Balance = ({ amount, children }: BalanceProps): JSX.Element => {
	return (
		<h1>
			{amount.toLocaleString(['en-US', 'de-DE', 'fr-FR'], {
				style: 'currency',
				currency: 'USD',
				currencyDisplay: 'narrowSymbol',
				// minimumFractionDigits: 2,
				// maximumFractionDigits: 2,
			})}{' '}
			{children}
		</h1>
	);
};

export default Balance;
