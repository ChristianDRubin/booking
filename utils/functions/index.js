import { Dimensions, PixelRatio, Platform } from "react-native";

const {width:SCREEN_WIDTH} = Dimensions.get("window");

const scale = SCREEN_WIDTH / 360;

export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);

export function pixelNormalize(size){
    const newSize = size * scale;
    if(Platform.OS === "ios"){
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }else{
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}