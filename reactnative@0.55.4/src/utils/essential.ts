import { name } from "../../app.json";

export { default as Uuid } from "react-native-essential/utils/uuid/@1.0";
export { default as pipeline } from "react-native-essential/utils/pipeline/@1.0";
export { default as PX } from "react-native-essential/utils/px/@1.0";
export { default as iPad } from "react-native-essential/utils/isIPad/@1.0";
export { default as isIPhoneX } from "react-native-essential/utils/isIPhoneX/@1.0";
export { default as getQueryString } from "react-native-essential/utils/getQueryString/@1.0";

export {
  default as String2,
  String2Class,
} from "react-native-essential/utils/string2/@1.0";
export {
  default as Number2,
  Number2Class,
} from "react-native-essential/utils/number2/@1.0";
export {
  default as Date2,
  Date2Class,
} from "react-native-essential/utils/date2/@1.0";

import { default as AppCacheProvider } from "react-native-essential/utils/appCache/@1.0";
export const AppCache = AppCacheProvider(name);

import { default as SessionCacheProvider } from "react-native-essential/utils/sessionCache/@1.0";
export const SessionCache = SessionCacheProvider(name);

export { HttpResponseStatus } from "react-native-essential/utils/http/@1.0/HttpResponseStatus";
export {
  HttpRequest,
  HttpResponse,
  createHttpRequest,
} from "react-native-essential/utils/http/@1.0/createHttpRequest";
export {
  HttpJsonpRequest,
  HttpJsonpResponse,
  createJsonpRequest,
} from "react-native-essential/utils/http/@1.0/createJsonpRequest";
