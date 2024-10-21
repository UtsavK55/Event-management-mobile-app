type AuthStackParamList = {
  SIGNUP: undefined;
  LOGIN: undefined;
};

type RootTabParamList = {
  DASHBOARD: undefined;
  EVENTS: undefined;
  PROFILE: undefined;
};

type DashboardStackParamList = {
  DASHBOARD_SCREEN: undefined;
};
type EventStackParamList = {
  ADD_EVENT: {event?:EventDetails};
  EVENTS_SCREEN: undefined;
  EVENT_DETAILS: undefined;
};
type ProfileStackParamList = {
  PROFILE_SCREEN: undefined;
  SETTINGS: undefined;
}

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'SIGNUP'>;

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LOGIN'>;

type DashboardScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  'DASHBOARD'
>;

type AddEventScreenProps = NativeStackScreenProps<
  EventStackParamList,
  'ADD_EVENT'
>;

type EventListScreenProps = NativeStackScreenProps<RootTabParamList, 'EVENTS'>;
type ProfileScreenProps = NativeStackScreenProps<ProfileStackParamList, 'PROFILE_SCREEN'>;
type DashboardStackScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  'DASHBOARD'
>;
type EventStackScreenProps = NativeStackScreenProps<
  EventStackParamList,
  'EVENTS_SCREEN'
>;
type SettingScreenProps = NativeStackScreenProps<ProfileStackParamList, 'SETTINGS'>;
