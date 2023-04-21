import { FlatList, FlatListProps } from 'react-native';

export type FlatListType<T> = new (props: FlatListProps<T>) => FlatList<T>;
