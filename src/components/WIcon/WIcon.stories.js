import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { select, number, color } from '@storybook/addon-knobs'
import { StoryView, StoryHeader } from '@modules/react-native-storybook/components'
import { Colors } from '@/theme'
import { WIcon } from './WIcon'

storiesOf('WIcon', module)
	.add(
		'all icons',
		() => (
			<StoryView scrollable>
				<StoryHeader.h1 text="Icon Catalog" />
				<View style={styles.container}>
					{icons.map(name => (
						<View key={name} style={styles.iconBox}>
							<View style={styles.iconWrapper}>
								<WIcon name={name} size={25} color={Colors.brand} />
							</View>
							<View style={styles.textWrapper}>
								<Text style={styles.text}>{name}</Text>
							</View>
						</View>
					))}
				</View>
			</StoryView>
		),
		{
			notes: 'Catalog of every icon',
		}
	)
	.add(
		'colors and sizes',
		() => {
			const name = select(
				'Icon',
				icons.reduce((prev, name) => ({ ...prev, [name]: name }), {}),
				'logo'
			)
			const size = number('Size', 100)
			const iconColor = color('Color', Colors.brand)
			return (
				<StoryView>
					<StoryHeader.h1
						text="Colors and sizes"
						description="Play with knobs to modify color and size"
					/>
					<WIcon name={name} size={size} color={iconColor} />
				</StoryView>
			)
		},
		{
			notes: 'An icon can be customized with color, size, width, height...',
		}
	)

const styles = {
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconBox: {
		borderWidth: 1,
		borderColor: '#aaa',
		width: 90,
		height: 90,
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconWrapper: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textWrapper: {
		flex: 1,
	},
	text: {
		fontSize: 9,
		textAlign: 'center',
	},
}

const icons = [
	'logo',
	'logo-sm',
	'logo-o',
	'logo-o-sm',
	'logotype',
	'category-food',
	'category-shopping',
	'category-wellness',
	'category-other',
	'cards-search',
	'my-cards',
	'my-promos',
	'user',
	'user-o',
	'user-sm',
	'how-works',
	'qr',
	'share-circle',
	'legal',
	'logout',
	'nav-bars',
	'nav-actions',
	'search',
	'points',
	'offer',
	'stamps',
	'coupon',
	'bono',
	'heart',
	'heart-o',
	'heart-o-arrow',
	'tag',
	'glance-comments',
	'glance-plus',
	'glance-tick',
	'card',
	'photos',
	'card-catalog',
	'card-menu',
	'card-comments',
	'card-establishments',
	'promo-age-range',
	'promo-expiration',
	'exclamation-triangle',
	'promo-student',
	'thumb-up',
	'thumb-down',
	'oops',
	'tick-0',
	'tick-12',
	'tick-1',
	'tick-2',
	'tick-3',
	'filter-about-to-expire',
	'filter-last-visited',
	'filter-near-me',
	'start-transaction',
	'expand',
	'compress',
	'tick',
	'plus',
	'chevron-down',
	'chevron-up',
	'chevron-left',
	'chevron-right',
	'email',
	'warning-triangle',
	'lock',
	'no-cards',
	'no-promos',
	'no-comments',
	'exclamation',
	'times',
	'plus-light',
	'chevron-right-round',
	'chevron-left-round',
	'minus',
	'chevron-thin-right',
	'chevron-thin-up',
	'chevron-thin-left',
	'chevron-thin-down',
]
