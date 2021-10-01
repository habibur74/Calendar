import { useMemo, useCallback } from "react";
import { PLANGOAB_LICENSE_KEY } from "@/constants/fullcalendar";
import { uuid } from "@/lib/uuid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useSaveModal, useSelectIsOpen } from "@/hooks/v2/useSaveModal";
import { useCreateCalendarMutation } from "@/redux/v2/services/calendarApi";

// TODO: v1 to v2
import { useUser } from "@/hooks/v1/useUser";
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { normalizeCalendar } from "@/core/v1/normalize";

const useSave = () => {
  const { stories } = useUserCalendar();
  const { birth } = useUser();
  const calendarId = useMemo(() => uuid(), []);
  const normalized = normalizeCalendar({ id: calendarId, stories });
  const [doCreateCalendar, { isLoading: isUpdating }] =
    useCreateCalendarMutation();
  const createCalendarApi = useCallback(
    () =>
      doCreateCalendar({
        calendar: normalized,
        birthday: birth,
        licenseKey: PLANGOAB_LICENSE_KEY,
      }),
    [doCreateCalendar, normalized, birth]
  );
  return createCalendarApi;
};

export const SaveModal: React.VFC = () => {
  const toggle = useSaveModal();
  const isOpen = useSelectIsOpen();

  const save = useSave();

  const handleSave = useCallback(() => {
    save();
    toggle();
  }, [save, toggle]);

  return (
    <Dialog onClose={toggle} open={isOpen}>
      <DialogContent>
        <Button onClick={toggle} variant="outlined">
          {"<< Close"}
        </Button>
        <Button onClick={handleSave} variant="outlined">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};
