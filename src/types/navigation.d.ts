type AuthStackParamList = {
  SIGNUP: undefined;
  LOGIN: undefined;
};

type RootStackParamList = {
    DASHBOARD: undefined;
}

type SignupScreenProps = NativeStackScreenProps<
RootStackParamList,
'SIGNUP'
>;

type LoginScreenProps = NativeStackScreenProps<
RootStackParamList,
'LOGIN'
>;
