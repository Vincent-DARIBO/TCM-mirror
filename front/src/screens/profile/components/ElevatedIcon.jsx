import React from 'react';
import ElevatedView from 'react-native-elevated-view';

export default function ElevatedIcon({icon, ...props}) {
  return (
    <ElevatedView elevation={2} {...props}>
      {icon}
    </ElevatedView>
  );
}
