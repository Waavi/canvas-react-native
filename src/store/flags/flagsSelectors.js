import { createSelector } from 'reselect'
import FLAG from '#flags'

export const getIsLoading = createSelector(
	state => state.flags,
	flags => flags[FLAG.LOADING] || false
)

export default {
	getIsLoading,
}
