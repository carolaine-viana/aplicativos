export interface ICordinates {
  latitude: number;
  longitude: number;
}
export interface IMarker<T = string> {
  latitude: number;
  longitude: number;
  identifier: T;
}
