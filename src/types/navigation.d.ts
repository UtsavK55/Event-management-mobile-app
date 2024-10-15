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
  DASHBOARDHOME: undefined;
  ADDEVENT: undefined;
};

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'SIGNUP'>;

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'LOGIN'>;

type DashboardScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  'DASHBOARD'
>;

type AddEventScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  'ADDEVENT'
>;

type EventListScreenProps = NativeStackScreenProps<RootTabParamList, 'EVENTS'>;
