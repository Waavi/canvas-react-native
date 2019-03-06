const type = {
	/*
		https://medium.com/@danielskripnik/how-to-add-and-remove-custom-fonts-in-react-native-b2830084b0e4

		How to install / uninstall fonts (iOS & Android):
        1. Add (or remove) them into @/assets/fonts
        2. Be sure they're named exactly as their Full Name (I think it should be done
            by their PostScript Name)
        3. run "react-native link assets"
    */
	bold: 'Ubuntu-Bold',
	italic: 'Ubuntu-Italic',
	light: 'Ubuntu-Light',
	medium: 'Ubuntu-Medium',
	regular: 'Ubuntu-Regular',
	semibold: 'Ubuntu-Medium',
}

const size = {
	8: 8,
	9: 9,
	10: 10,
	11: 11,
	12: 12,
	14: 14,
	16: 16,
	18: 18,
}

export const Fonts = {
	type,
	size,
}
