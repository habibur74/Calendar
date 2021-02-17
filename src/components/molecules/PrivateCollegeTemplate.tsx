import React from "react";
import { TemplateCalendarContainer } from "./TemplateCalendarContainer";
import { useCommunityCollegeCalendar } from "../../hooks/useCommunityCollegeCalendar";
import { useUser } from "../../hooks/useUser";

export function PrivateCollegeTemplate() {
  const { birth, canWorkingholiday } = useUser();
  const { resources, events, generate } = useCommunityCollegeCalendar();

  React.useEffect(() => {
    generate({ birth, canWorkingholiday });
  }, [generate, birth, canWorkingholiday]);

  return <TemplateCalendarContainer events={events} resources={resources} />;
}
