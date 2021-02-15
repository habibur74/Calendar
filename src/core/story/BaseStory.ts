import { convertIsoToYearAndMonth } from "../../lib/date";
import { BaseEvent, initEvent } from "../event/BaseEvent";
import { BaseResource, initResource } from "../resource/BaseResource";
import { uuid } from "../../lib/uuid";

export type BaseStory = {
  id: string;
  calendarId: string;
  events: BaseEvent[];
  resources: BaseResource[];
  name: string;
};

export const removeEvent = (story: BaseStory, eventId: string): BaseStory => {
  const newEvents = story.events.filter((event) => event.id !== eventId);
  return { ...story, events: newEvents };
};

export const createStoryName = (birth: Date) => {
  return "from " + convertIsoToYearAndMonth(birth.toISOString());
};

export const initStory = (props?: Partial<BaseStory>): BaseStory => {
  const { id, calendarId: _calendarId, events, resources, name } = props ?? {};

  const storyId = id ?? uuid();
  const calendarId = _calendarId ?? uuid();
  const eventId = uuid();
  const _events = events ?? [initEvent({ id: eventId, storyId })];
  const _resources = resources ?? [initResource({ calendarId, storyId })];

  return {
    id: storyId,
    calendarId,
    events: _events,
    resources: _resources,
    name: name ?? "No Name",
  };
};

export const updateStory = (story: BaseStory, params: Partial<BaseStory>) => {
  return { ...story, ...params };
};
