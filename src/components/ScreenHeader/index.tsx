import React from 'react';

import { GoBackButton } from '~/components';
import { EmptyView } from '~/styles';

import * as S from './styles';

const ScreenHeader = () => {
	return (
		<S.Container>
			<GoBackButton />
			<EmptyView />
			<EmptyView />
		</S.Container>
	);
};

export default ScreenHeader;
