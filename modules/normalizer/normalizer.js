// Note: for more complex normalization, use normalizr instead of normalizer

// NORMALIZATION
export const normalizeIds = (array, id = 'id') => array.map(o => o[id])
export const normalizeById = (array, id = 'id') =>
	array.reduce((result, o) => ({ ...result, [o[id]]: o }), {})

export const normalize = (array, id = 'id') => ({
	ids: normalizeIds(array, id),
	byId: normalizeById(array, id),
})
// DENORMALIZATION
export const denormalize = ({ ids, byId }) => ids.map(id => byId[id])
