import { createAction } from 'redux-actions'

export const requestTabList = createAction('requestTabList')
export const updateTabList = createAction('updateTabList')
export const updateTabChecked = createAction('updateTabChecked')
export const deleteTabFromList = createAction('deleteTabFromList');