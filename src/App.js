import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,

} from 'react-native';
import logo from './logo.png';

import { Button, Switch, LoadingPlaceholder, VictoryChart} from 'react-native-web-ui';

const App = () => (
  <View style={{ flex: 1 }}>
    <Text>Button :</Text>

    <Button onClick={() => {}}  label="Primary button" color="primary" variant="contained"  />
    <Button onClick={() => {}}  label="Primary rounded button" color="primary" variant="contained" rounded />
    <Button onClick={() => {}}  label="Secondary button" color="secondary" variant="contained"  />
    <Button onClick={() => {}}  label="Secondary rounded button" color="secondary" variant="contained" rounded />
    <Button onClick={() => {}}  label="Custom color button" color="#16ab08" variant="contained"  />
    <Button onClick={() => {}}  label="Custom color rounded button" color="#16ab08" variant="contained" rounded />

    <Text>Switch :</Text>

    <Switch color="primary" />
    <Switch color="secondary" />
    <Switch color="#16ab08" />

    <Text>Charts :</Text>
    <VictoryChart />
  </View>
);

export default App;
