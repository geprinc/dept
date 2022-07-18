import { DateData } from '@interfaces/datesInterfaces';
import { State } from '@interfaces/reduxInterfaces';
import { getDate, getDates } from '@services/DatesService';
import { getImageURL } from '@utils/datesApiUtils';
import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';

export const actions = createTypes(
  completeTypes({
      primaryActions: ['GET_DATES', 'GET_DATE_DATA'],
      ignoredActions: ['SET_SELECTED_DATE', 'SET_DATE_DATA', 'CLEAR_DATE_DETAIL']
  }),
  '@@DATES'
);

const TARGETS = {
  DATES: 'dates',
  SELECTED_DATE: 'selectedDate',
  DATE: 'date'
};

export const actionCreators = {
  getDates: () => ({
    type: actions.GET_DATES,
    target: TARGETS.DATES,
    service: getDates
  }),
  getDate: (date: string) => ({
    type: actions.GET_DATE_DATA,
    target: TARGETS.DATE,
    service: getDate,
    payload: date,
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<DateData[]>) => {
        const updatedDate = response.data?.map((dateData: DateData) => ({ ...dateData, image: getImageURL(date, dateData.image) }));
        dispatch({
          type: actions.SET_DATE_DATA,
          target: TARGETS.DATE,
          payload: updatedDate
        })
      })
    ]
  }),
  setSelectedDate: (date: string) => ({
    type: actions.SET_SELECTED_DATE,
    target: TARGETS.SELECTED_DATE,
    payload: date
  }),
  clearDateDetail: () => ({
    type: actions.CLEAR_DATE_DETAIL,
    target: TARGETS.DATE,
    payload: null
  })
};
