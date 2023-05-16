export function getDurationText( durationInMonths: number ): string {

	const years: number = Math.floor(durationInMonths / 12);
	const months: number = durationInMonths % 12;

	const yearsText = years > 1 ? 'yrs' : 'yr';
	const monthsText = months > 1 ? 'mos' : 'mo';

	let durationText: string = '';

	if (years != 0) {
		durationText += `${years} ${yearsText} `;
	}

	if (months != 0) {
    durationText += `${months} ${monthsText}`;
	}

  return durationText.trim();
}