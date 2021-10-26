import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const EmptyView = styled.View``;

export const SafeAreaViewWrapper = styled.SafeAreaView`
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