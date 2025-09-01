import { StoryFn, Meta } from '@storybook/react';
import { DisplayBox, DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxTitle, DisplayBoxSubTitle, DisplayBoxBody } from '../DisplayBox/DisplayBox.styles';
import { useTheme } from 'styled-components';

export default {
  title: 'Theme/Colours',
} as Meta;

export const Primary: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'skyBlueLighter', subtitle: 'Lighter' },
    { key: 'skyBlueLight', subtitle: 'Light' },
    { key: 'skyBlue', subtitle: 'Base' },
    { key: 'skyBlueDark', subtitle: 'Dark' },
    { key: 'skyBlueDarker', subtitle: 'Darker' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Secondary: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'greenLighter', subtitle: 'Lighter' },
    { key: 'greenLight', subtitle: 'Light' },
    { key: 'green', subtitle: 'Base' },
    { key: 'greenDark', subtitle: 'Dark' },
    { key: 'greenDarker', subtitle: 'Darker' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>green</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Tertiary: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'steelBlueLighter', subtitle: 'Lighter' },
    { key: 'steelBlueLight', subtitle: 'Light' },
    { key: 'steelBlue', subtitle: 'Base' },
    { key: 'steelBlueDark', subtitle: 'Dark' },
    { key: 'steelBlueDarker', subtitle: 'Darker' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Orange: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'orangeLighter', subtitle: 'Lighter' },
    { key: 'orangeLight', subtitle: 'Light' },
    { key: 'orange', subtitle: 'Base' },
    { key: 'orangeDark', subtitle: 'Dark' },
    { key: 'orangeDarker', subtitle: 'Darker' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>orange</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Gray: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'grayLighter', subtitle: 'Lighter' },
    { key: 'grayLight', subtitle: 'Light' },
    { key: 'gray', subtitle: 'Base' },
    { key: 'grayDark', subtitle: 'Dark' },
    { key: 'grayDarker', subtitle: 'Darker' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>gray</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Simple: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'black', name: 'black' },
    { key: 'white', name: 'white' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, name }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxTitle>{name}</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

export const Alert: StoryFn = () => {
  const theme = useTheme();
  const items = [
    { key: 'redLighter', subtitle: 'Lighter' },
    { key: 'redLight', subtitle: 'Light' },
    { key: 'red', subtitle: 'Base' },
  ] as const;

  return (
    <DisplayBoxWrapper>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>red</DisplayBoxTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};
