interface AddNewAttendeeModalProps {
  label: string;
  attendee?: AttendeeInfo;
  add?:boolean;
  edit?:boolean;
  setCurrentAttendeeArr?: Dispatch<SetStateAction<AttendeeInfo[]>>;
  isNewAttendeeModalVisible: boolean;
  setIsNewAttendeeModalVisible: Dispatch<SetStateAction<boolean>>;
  setIsAttendeeModalVisible?: Dispatch<SetStateAction<boolean>>;
}

interface AttendeeCardProps {
  item: AttendeeInfo;
  currentAttendeeArr: AttendeeInfo[];
  setCurrentAttendeeArr: Dispatch<SetStateAction<AttendeeInfo[]>>;
}
