const DarkColorsArray = ['dark-blue-300', 'blue-fuchsia-gradient', 'blue-800', 'blue-300']
const LightColorsArray = ['gray-50', 'white', 'blue-50']
const isDark = (color: string): boolean => {
	return DarkColorsArray.includes(color)
}

const isLight = (color: string): boolean => {
	return LightColorsArray.includes(color)
}

export function accessibleTextColor(bgColor: string): 'white' | 'black' {
	let textColor: 'black' | 'white' = 'black'

	if (isDark(bgColor)) {
		textColor = 'white'
	} else if (isLight(bgColor)) {
		textColor = 'black'
	} else {
		throw Error(`Invalid background color, ${bgColor}`)
	}
	return textColor
}
