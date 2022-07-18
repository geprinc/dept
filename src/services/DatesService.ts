import api from "@config/api";

const ALL_DATES_ROUTE = 'enhanced/all';
const DATE_ROUTE = 'enhanced/date/';

export const getDates = () => api.get(ALL_DATES_ROUTE);

export const getDate = (date: string) => api.get(DATE_ROUTE + date);