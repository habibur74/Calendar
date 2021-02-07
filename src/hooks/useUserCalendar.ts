import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfileStory } from "../core/story/ProfileStory/createProfileStory";
import { createUserCalendar } from "../core/calendar/UserCalendar/createUserCalendar";
import {
  update as updateAction,
  selectUserCalendar,
} from "../redux/features/userCalendars";

export const useUserCalendar = () => {
  const dispatch = useDispatch();
  const calendars = useSelector(selectUserCalendar);
  const calendar = calendars[0]; // TODO: later there is plan to become list.

  const init = React.useCallback(
    (birthday: string | Date) => {
      const story = createProfileStory({ birth: birthday });
      const calendar = createUserCalendar({ stories: [story] });
      const _calendars = [calendar];
      dispatch(updateAction({ calendars: _calendars }));
    },
    [dispatch]
  );

  const stories = React.useMemo(() => calendar?.stories ?? [], [calendar]);

  const events = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.events) ?? [],
    [calendar]
  );

  const resources = React.useMemo(
    () => calendar?.stories.flatMap((story) => story.resources) ?? [],
    [calendar]
  );

  // const { click } = useEventsHandler();

  // const click = React.useCallback(
  //   (arg) => {
  //     console.log("[click]1, arg", arg);
  //     // const newCalendar = _click(calendar)(arg);

  //     const info = arg;
  //     if (!calendar) return null;
  //     if (!window.confirm("Would you like to remove this event?")) return null;
  //     const id = info.event.id;
  //     if (!id) {
  //       console.error("cannot find id in event.");
  //       return null;
  //     }

  //     const newCalendar = calendar;
  //     console.log("[click]1.2, newCalendar", newCalendar, id);
  //     newCalendar.removeEvent(id);
  //     // return calendar

  //     console.log("[click]2, newCalendar", newCalendar);
  //     if (!newCalendar) return;
  //     console.log("[click]3");
  //     setCalendar(newCalendar as UserCalendar);
  //   },
  //   [calendar]
  // );

  return { calendar, stories, events, resources, init /* click */ } as const;
};
