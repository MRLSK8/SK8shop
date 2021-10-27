import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const EmptyView = styled.View``;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 32,
  }
})`
  background-color: ${({ theme }) => theme.colors.white200};
  flex: 1;
`;

export const SafeAreaViewWrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.white200};
  flex: 1;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});