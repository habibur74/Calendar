import React from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

const Index = () => (
  <FullCalendar
    plugins={[interactionPlugin, resourceTimelinePlugin]}
    initialView="resourceTimelineDay"
    nowIndicator={true}
    editable={true}
    initialEvents={[
      { title: "nice event", start: new Date(), resourceId: "a" },
    ]}
    initialResources={[
      { id: "a", title: "Auditorium A" },
      { id: "b", title: "Auditorium B" },
      { id: "c", title: "Auditorium C" },
    ]}
  />
);

export default Index;
