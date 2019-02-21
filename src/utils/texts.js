const toFixedTrimmed = (x, d) => x.toFixed(d).replace(/\.?0+$/, '')

export const Distance = d => {
	if (d < 1) return `${(d * 100).toFixed()}0m`
	if (d < 10) return `${toFixedTrimmed(d, 1)}km`
	if (d < 50) return `${Math.round(d)}km`
	if (d < 250) return `${Math.round(d / 5) * 5}km`
	return `${Math.round(d / 10) * 10}km`
}
