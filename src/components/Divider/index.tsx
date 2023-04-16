import React from 'react';

import * as S from './styles';

interface IDividerProps {
	containerWidth?: number;
	marginVertical?: number;
	text?: string;
}

const Divider: React.FC<IDividerProps> = ({ text, containerWidth, marginVertical }) => {
	return (
		<S.Container
			containerWidth={containerWidth}
			marginVertical={marginVertical}
		>
			<S.DividerView />
			{
				!!text && (
					<S.DividerText>
						{text}
					</S.DividerText>
				)
			}
			<S.DividerView />
		</S.Container>
	);
};

export default Divider;
