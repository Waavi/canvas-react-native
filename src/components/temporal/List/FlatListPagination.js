import React, { PureComponent } from 'react'
import { array, func, object, any } from 'prop-types'
import { FlatList } from 'react-native'
import { Box, Loading, RefreshControl, InfiniteLoading } from 'app/components'

export class FlatListPagination extends PureComponent {
	static propTypes = {
		data: array.isRequired,
		keyExtractor: func,
		renderItem: func.isRefreshing,
		pagination: object.isRequired,
		refreshData: func.isRequired,
		loadMoreData: func.isRequired,
		ListHeaderComponent: any,
		ItemSeparatorComponent: any,
		innerRef: func,
	}
	onEndReached(pagination, loadMoreData) {
		const { isLoadingMore, isLoadedAll } = pagination
		return !isLoadingMore && !isLoadedAll ? loadMoreData : null
	}

	renderFooter(isLoadingMore) {
		return (
			<Box cls="pb-s">
				<InfiniteLoading active={isLoadingMore} />
			</Box>
		)
	}

	render() {
		const {
			pagination,
			refreshData,
			loadMoreData,
			onEndReachedThreshold = 0.2,
			innerRef,
			...otherProps
		} = this.props
		const { isLoading, isLoadingMore, isRefreshing } = pagination
		if (isLoading) {
			return (
				<Box cls="flex-1">
					<Loading active opacity={1} />
				</Box>
			)
		}
		return (
			<FlatList
				ref={innerRef}
				onEndReached={this.onEndReached(pagination, loadMoreData)}
				onEndReachedThreshold={onEndReachedThreshold}
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
				}
				ListFooterComponent={this.renderFooter(isLoadingMore)}
				{...otherProps}
			/>
		)
	}
}
