import {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	Extrapolation,
	interpolate,
} from 'react-native-reanimated';

import { IMAGE_HEIGHT } from './styles';

const useImageAnimation = () => {
	const scrollY = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				scrollY.value,
				[0, IMAGE_HEIGHT / 3, IMAGE_HEIGHT],
				[1, 0.4, 0],
				Extrapolation.CLAMP
			)
		};
	});

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	return { scrollHandler, animatedStyle };
}

export default useImageAnimation;
