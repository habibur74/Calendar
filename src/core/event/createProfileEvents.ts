import { addMonths, addYears, setMonth } from "date-fns";

import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../../constants/fullcalendar/settings";
import { getRangeNumbers } from "../../lib/age";
import { uuid } from "../../lib/uuid";
import { convertIsoToDateTime } from "../../lib/date";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../constants/visa";
import { BaseEvent } from "../event/BaseEvent";

export const createProfileEvents = ({
  startDate,
  storyId,
  calendarId,
  withWorkingholiday,
  workingholidayPeriod,
}: {
  startDate: Date;
  storyId: string;
  calendarId: string;
  withWorkingholiday: boolean;
  workingholidayPeriod: number;
}): BaseEvent[] => {
  const workingHolidayLimitEvents = withWorkingholiday
    ? createWorkingHolidayLimitEvents({
        startDate,
        storyId,
        calendarId,
        workingholidayPeriod,
      })
    : [];

  // create age events
  const startYear = new Date(startDate).getFullYear();
  const endYear = getLastYear();
  const years = getRangeNumbers(startYear, endYear);
  const ageEventList = years.map((year, index) => {
    const start = (() => {
      startDate.setFullYear(year);
      const isoStr = startDate.toISOString();
      const str = convertIsoToDateTime(isoStr);
      return str;
    })();

    const isoStr = addMonths(new Date(start), +11).toISOString();
    const end = convertIsoToDateTime(isoStr);

    return {
      id: uuid(),
      title: `Aage:${index}`,
      start,
      end,
      storyId,
      resourceId: RESOURCE_ID__SHARED__AGE,
      extendedProps: {
        resourceId: RESOURCE_ID__SHARED__AGE,
        calendarId,
        storyId,
      },
    };
  });

  return [...workingHolidayLimitEvents, ...ageEventList];
};

const getLastYear = () => {
  const BUFFER_YEAR = 10;
  const date = new Date();
  return addYears(date, BUFFER_YEAR).getFullYear();
};

const createWorkingHolidayLimitEvents = ({
  startDate,
  storyId,
  calendarId,
  workingholidayPeriod,
}: {
  startDate: Date;
  storyId: string;
  calendarId: string;
  workingholidayPeriod: number;
}): BaseEvent[] => {
  const lastYearDate = addYears(
    startDate,
    WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
  );
  const start = convertIsoToDateTime(startDate.toISOString());
  const endDate = addMonths(lastYearDate, workingholidayPeriod);
  const endOfLimit = convertIsoToDateTime(endDate.toISOString());
  const endOfApplication = convertIsoToDateTime(
    addYears(setMonth(endDate, +6), -1).toISOString()
  );

  const limitation = {
    id: uuid(),
    title: "Available Scope of WorkingHoliday",
    start,
    end: endOfLimit,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    storyId,
    extendedProps: {
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      storyId,
      calendarId,
    },
  };

  const application = {
    id: uuid(),
    title: "Application Limit",
    start,
    end: endOfApplication,
    storyId,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    extendedProps: {
      storyId,
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      calendarId,
    },
  };
  return [limitation, application];
};
