import i18next from "i18next";
import { DateData } from "react-native-calendars";

import './i18n';

const monthNames = [
    i18next.t('UTILS:JANUARY'),
    i18next.t('UTILS:FEBRUARY'),
    i18next.t('UTILS:MARCH'),
    i18next.t('UTILS:APRIL'),
    i18next.t('UTILS:MAY'),
    i18next.t('UTILS:JUNE'),
    i18next.t('UTILS:JULY'),
    i18next.t('UTILS:AUGUST'),
    i18next.t('UTILS:SEPTEMBER'),
    i18next.t('UTILS:OCTOBER'),
    i18next.t('UTILS:NOVEMBER'),
    i18next.t('UTILS:DECEMBER'),
];

export const onlyDate = (date: Date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const onlyDateWithMonth = (date: Date) => `${date.getDate()}/${monthNames[date.getMonth()]}/${date.getFullYear()}`;

export const getMaximumDate = () => {
    const now = new Date();
    return new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
}

export const getCurrentOrFutureDate = (days?: number) => {
    const now = new Date();
    const addedDays = days ? days : 0;
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + addedDays);
}

export const getCurrentStringDate = () => {
    const now = new Date();
    return `${now.getFullYear}-${now.getMonth() + 1}-${now.getDate()}`;
}

export const getFutureDate = (numberOfDays: number) => {
    const date = new Date(new Date().getTime()+(numberOfDays*24*60*60*1000));
    return `${date.getFullYear}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const dateToString = (date?: Date) => date ? `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}` : '';

export const dateDataToString = (day: DateData) => `${day.year}-${day.month}-${day.day}`;