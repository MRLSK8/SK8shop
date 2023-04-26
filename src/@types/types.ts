import { FlashList as FlatList, FlashListProps as FlatListProps } from "@shopify/flash-list";

export type FlatListType<T> = new (props: FlatListProps<T>) => FlatList<T>;
