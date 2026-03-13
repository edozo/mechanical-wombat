import { StoryFn, Meta } from '@storybook/react';
import { useTheme } from 'styled-components';
import { DisplayBox, DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxTitle, DisplayBoxSubTitle, DisplayBoxBody } from '../DisplayBox/DisplayBox.styles';

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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>skyBlue (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>green (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>steelBlue (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>orange (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>gray (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, name }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxTitle>{name} (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
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
    <DisplayBoxWrapper showBorder={false}>
      {items.map(({ key, subtitle }) => (
        <DisplayBox background={key} key={key}>
          <DisplayBoxSubTitle>{subtitle}</DisplayBoxSubTitle>
          <DisplayBoxTitle>red (deprecated)</DisplayBoxTitle>
          <DisplayBoxSubTitle>Not used by the new brand</DisplayBoxSubTitle>
          <DisplayBoxBody>{theme.colors[key]}</DisplayBoxBody>
        </DisplayBox>
      ))}
    </DisplayBoxWrapper>
  );
};

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const renderTokenGrid = (title: string, tokens: Record<(typeof steps)[number], string>) => (
  <DisplayBoxWrapper showBorder={false}>
    {steps.map((step) => (
      <DisplayBox background={tokens[step]} key={`${title}-${step}`}>
        <DisplayBoxSubTitle>{step}</DisplayBoxSubTitle>
        <DisplayBoxTitle>{title}</DisplayBoxTitle>
        <DisplayBoxBody>{tokens[step]}</DisplayBoxBody>
      </DisplayBox>
    ))}
  </DisplayBoxWrapper>
);

export const Neutral: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('neutral', theme.colors.neutral);
};

export const Slate: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('slate', theme.colors.slate);
};

export const Blue: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('blue', theme.colors.blue);
};

export const Indigo: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('indigo', theme.colors.indigo);
};

export const Teal: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('teal', theme.colors.teal);
};

export const StatusInfo: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('status.info', theme.colors.status.info);
};

export const StatusSuccess: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('status.success', theme.colors.status.success);
};

export const StatusWarning: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('status.warning', theme.colors.status.warning);
};

export const StatusDanger: StoryFn = () => {
  const theme = useTheme();
  return renderTokenGrid('status.danger', theme.colors.status.danger);
};
