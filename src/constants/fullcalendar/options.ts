import { FIELD_NAME, GROUP_ID_KEY } from "./settings";

export const MY_TIME_LINE_NAME = "MY_TIME_LINE_NAME";

const slotLabelFormat = [{ year: "numeric" }, { month: "numeric" }];

const headerToolbar = {
  left: "today prev,next",
  center: "title",
  right: `${MY_TIME_LINE_NAME},listMonth`,
} as const;

const initialView = { initialView: MY_TIME_LINE_NAME } as const;

const resourceGroupField = { resourceGroupField: GROUP_ID_KEY } as const;

const resourceAreaColumns = [
  {
    field: FIELD_NAME["H1"],
    headerContent: "Category",
  },
  {
    field: FIELD_NAME["H2"],
    headerContent: "Event",
  },
];

const schedulerLicenseKey = {
  schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
} as const;

const views = {
  [MY_TIME_LINE_NAME]: {
    name: "timeline",
    type: "resourceTimelineYear",
    duration: { year: 15 },
    buttonText: "TIME_LINE",
  },
} as const;

export const FULL_CALENDAR_CONFIGS = {
  resourceAreaColumns,
  views,
  headerToolbar,
  slotLabelFormat,
  ...initialView,
  ...resourceGroupField,
  ...schedulerLicenseKey,
} as const;
