export const standardCount = (count) => {
	if (count > 1000) {
		return (count * 1.0 / 1000).toFixed(2).toString() + 'k';
	}
	return `${count}`;
}
