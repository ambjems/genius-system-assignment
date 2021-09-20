import {SET_SORT_BY,SET_SUBS_DETAILS,SET_FILTER_BY,SET_FILTER_BY_VAL} from '../types/infoTypes'


export const setSortBy = (index) => ({
  type: SET_SORT_BY,
  payload:index
});

export const setFilterBy = (data) => ({
  type: SET_FILTER_BY,
  payload:data
});

export const setFilterByVal = (val) => ({
  type: SET_FILTER_BY_VAL,
  payload:val
});

export const setSubsDetails = (data) => ({
  type: SET_SUBS_DETAILS,
  payload:data
});

