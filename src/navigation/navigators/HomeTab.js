import { createBottomTabNavigator } from 'react-navigation'
import { InboxScreen, EnquiriesScreen, ArchiveScreen } from '@/screens'

const HomeTab = createBottomTabNavigator({
	Inbox: { screen: InboxScreen },
	Enquiries: { screen: EnquiriesScreen },
	Archive: { screen: ArchiveScreen },
})

export default HomeTab
