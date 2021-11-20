/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from 'react';
import { Dimensions, Text as DefaultText, View as DefaultView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LineChartProps } from 'react-native-chart-kit/dist/line-chart/LineChart';

import Colors from '../constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = Colors.text;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = Colors.background;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Chart(props: LineChartProps) {
  const { chartConfig, ...otherProps} = props;

  return <LineChart
    chartConfig={{
      backgroundColor: Colors.blue,
      backgroundGradientFrom: Colors.blue,
      backgroundGradientTo: "#6C92F4",
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      propsForLabels: {
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "#E4E6FA"
      },
      propsForVerticalLabels: {
        fontSize: 18,
      }, ...chartConfig
    }}
    {...otherProps} />;
}
