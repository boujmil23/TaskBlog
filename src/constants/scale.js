import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//note 4 mobile standard
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;
// responsive
const scale = size => width / guidelineBaseWidth * size;
const scaleVertical = size => height / guidelineBaseHeight * size;
const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export { scale, scaleVertical, scaleModerate };
