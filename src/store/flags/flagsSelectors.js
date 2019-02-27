import { createSelector } from 'reselect'
import FLAG from '#flags'

export const isLoading = createSelector(
	state => state.flags,
	flags => flags[FLAG.LOADING] || false
)

export default {
	isLoading,
}
