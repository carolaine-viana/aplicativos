import AsyncStorage from '@react-native-community/async-storage';
import { Profiles, TRole } from '@shared/types';
import { addNoRepeatedString, getISOStringDate, mergArrayIntoStrings } from '.';

export const FV_TOKEN = '@fv/token';
export const FV_TOKEN_EXPIRATION = '@fv/tokenExpiration';
export const FV_USER_LOGIN = '@fv/rcaLogin';
export const FV_USER_ROLE = '@fv/userRole';
export const FV_FIRST_TUTO_MAP = '@fv/firstTutoMap';
export const FV_FEATURE_FLAGS = '@fv/featureFlags';
export const FV_COMPLETED_TUTORIALS = '@fv/completedTutorials';
export const FV_LAST_TIME_USER_SAW_TUTORIAL = '@fv/lastTimeUserSawTutorial';
export const FV_DATE_ACCEPTED_TERM_USE = '@fv/dateAcceptedTermUse';
export const FV_DATE_UPDATED_TERM_USE = '@fv/dateUpdatedTermUse';

export const clear = () => AsyncStorage.clear();

// TOKEN INFO
export const setToken = async (token: string) => {
  await AsyncStorage.setItem(FV_TOKEN, token);
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(FV_TOKEN);
  return token;
};

export const setTokenExpiration = async (expirationDate: Date) => {
  await AsyncStorage.setItem(FV_TOKEN_EXPIRATION, expirationDate.toString());
};

export const getTokenExpiration = async (): Promise<Date | number> => {
  const expirationTime = await AsyncStorage.getItem(FV_TOKEN_EXPIRATION);
  return expirationTime ? new Date(expirationTime) : 0;
};

// USER INFO
export const getUserLogin = async () => {
  const userLogin = await AsyncStorage.getItem(FV_USER_LOGIN);
  return userLogin;
};

export const setUserLogin = async (login: string) => {
  await AsyncStorage.setItem(FV_USER_LOGIN, login);
};

export const getUserRole = async (): Promise<TRole | null> => {
  const userRole = await AsyncStorage.getItem(FV_USER_ROLE);
  return userRole as TRole;
};

export const setUserRole = async (role: TRole) => {
  await AsyncStorage.setItem(FV_USER_ROLE, role);
};

export const isUserGV = async (): Promise<boolean> => {
  const userRole = await getUserRole();
  return userRole === Profiles.GV;
};

// FEATURE FLAG
export const setFeatureFlags = async (featureFlags: string) => {
  await AsyncStorage.setItem(FV_FEATURE_FLAGS, featureFlags);
};

export const getFeatureFlags = async () => {
  const flags = await AsyncStorage.getItem(FV_FEATURE_FLAGS);
  return flags || '';
};

// TUTORIALS
export const getCompletedTutorials = async () => {
  const completedTutorials = await AsyncStorage.getItem(FV_COMPLETED_TUTORIALS);
  return completedTutorials ?? '';
};

export const setCompletedTutorials = async (tutorial: string) => {
  const completedTutorials = await getCompletedTutorials();
  if (completedTutorials !== ';') {
    const newListCompletedTutorials = completedTutorials.split(';');
    const uniqueStrings = addNoRepeatedString(newListCompletedTutorials, tutorial);
    await AsyncStorage.setItem(FV_COMPLETED_TUTORIALS, mergArrayIntoStrings(uniqueStrings));
  }
};

export const getLastTimeUserSawTutorial = () =>
  AsyncStorage.getItem(FV_LAST_TIME_USER_SAW_TUTORIAL);

export const setLastTimeUserSawTutorial = () => {
  const isoStringDate = getISOStringDate(new Date());
  AsyncStorage.setItem(FV_LAST_TIME_USER_SAW_TUTORIAL, isoStringDate);
};

export const getFirstTutoMap = async (visualized?: string) => {
  if (visualized === 'visualized') {
    await AsyncStorage.setItem(FV_FIRST_TUTO_MAP, 'visualized');
  }
  const firstMap = await AsyncStorage.getItem(FV_FIRST_TUTO_MAP);
  return firstMap;
};

// PRIVACY POLICY
export const getAcceptedTermUseDate = () => AsyncStorage.getItem(FV_DATE_ACCEPTED_TERM_USE);

export const setDateAcceptedTermUse = (lastDate: string | undefined) => {
  if (lastDate) {
    return AsyncStorage.setItem(FV_DATE_ACCEPTED_TERM_USE, lastDate);
  }
};

export const getUpdatedTermUseDate = () => AsyncStorage.getItem(FV_DATE_UPDATED_TERM_USE);
export const setDateUpdatedTermUse = (updatedDate: string | undefined) => {
  if (updatedDate) {
    return AsyncStorage.setItem(FV_DATE_UPDATED_TERM_USE, updatedDate);
  }
};
