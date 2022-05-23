export interface MapLocation {
  lat: number;
  long: number;
  zoom: number;
}

type MapPin = {
  lat: number;
  long: number;
  icon?: string;
  title?: string;
};

type MapPins = {
  centerPinsInView?: Boolean;
  mapViewMargin?: number;
  pins: MapPin[];
};
