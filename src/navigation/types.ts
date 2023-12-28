import { StackNavigationProp } from '@react-navigation/stack';

export enum Screens {
  Main = 'Main',
  FormsScreen = 'FormsScreen',
  ResponsiveCardScreen = 'ResponsiveCardScreen',
  InfinityScrollScreen = 'InfinityScrollScreen ',
}

export type RootStackList = {
  [Screens.Main]: undefined;
  [Screens.FormsScreen]: undefined;
  [Screens.InfinityScrollScreen]: undefined;
  [Screens.ResponsiveCardScreen]: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackList> =
  StackNavigationProp<RootStackList, T>;
