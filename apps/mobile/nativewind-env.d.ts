/// <reference types="nativewind/types" />

import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ScrollViewProps {
    className?: string;
    contentContainerClassName?: string;
  }
  interface TextInputProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
  interface ActivityIndicatorProps {
    className?: string;
  }
  interface SwitchProps {
    className?: string;
  }
}

declare module 'react-native-safe-area-context' {
  import * as React from 'react';
  import { NativeSafeAreaViewProps } from 'react-native-safe-area-context/lib/typescript/src/SafeAreaView.types';

  export * from 'react-native-safe-area-context/lib/typescript/src/index';
  export interface SafeAreaViewProps extends NativeSafeAreaViewProps {
    className?: string;
  }
  export const SafeAreaView: React.ForwardRefExoticComponent<SafeAreaViewProps & React.RefAttributes<any>>;
}
