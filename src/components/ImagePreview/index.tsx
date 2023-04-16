import React, { useCallback } from 'react';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

import * as S from './styles';
interface IParamsProps {
	imageUri: string;
}

type IParams = RouteProp<Record<string, IParamsProps>, string>;

const ImagePreview: React.FC = () => {
	const imageUri = useRoute<IParams>().params?.imageUri;
	const { goBack } = useNavigation();

	const closePreview = useCallback(() => {
		goBack();
	}, []);

	return (
		<S.Container>
			<S.ImageZoomable >
				<S.Image source={{ uri: imageUri }} />
			</S.ImageZoomable>

			<S.PaperIconButton
				icon={(props: any) => <S.CompressIcon  {...props} />}
				onPress={closePreview}
			/>
		</S.Container>
	);
};

export default ImagePreview;
