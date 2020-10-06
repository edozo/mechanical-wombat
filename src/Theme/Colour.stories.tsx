import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DisplayBox, DisplayBoxWrapper } from '../DisplayBox';
import { DisplayBoxTitle, DisplayBoxSubTitle, DisplayBoxBody } from '../DisplayBox/DisplayBox.styles.ts';

export default {
  title: 'Theme/Colours',
} as Meta;

// TODO: Martin to add extra theme colours here
export const Primary: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="skyBlueLighter">
      <DisplayBoxSubTitle>Lighter</DisplayBoxSubTitle>
      <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
      <DisplayBoxBody>#B4EEF9</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="skyBlueLight">
      <DisplayBoxSubTitle>Light</DisplayBoxSubTitle>
      <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
      <DisplayBoxBody>#1DCEEC</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="skyBlue">
      <DisplayBoxSubTitle>Base</DisplayBoxSubTitle>
      <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
      <DisplayBoxBody>#00B8D7</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="skyBlueDark">
      <DisplayBoxSubTitle>Dark</DisplayBoxSubTitle>
      <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
      <DisplayBoxBody>#019FBA</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="skyBlueDarker">
      <DisplayBoxSubTitle>Darker</DisplayBoxSubTitle>
      <DisplayBoxTitle>skyBlue</DisplayBoxTitle>
      <DisplayBoxBody>#00859C</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);

export const Secondary: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="greenLighter">
      <DisplayBoxSubTitle>Lighter</DisplayBoxSubTitle>
      <DisplayBoxTitle>green</DisplayBoxTitle>
      <DisplayBoxBody>#C8EAAF</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="greenLight">
      <DisplayBoxSubTitle>Light</DisplayBoxSubTitle>
      <DisplayBoxTitle>green</DisplayBoxTitle>
      <DisplayBoxBody>#A0D777</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="green">
      <DisplayBoxSubTitle>Base</DisplayBoxSubTitle>
      <DisplayBoxTitle>green</DisplayBoxTitle>
      <DisplayBoxBody>#99C875</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="greenDark">
      <DisplayBoxSubTitle>Dark</DisplayBoxSubTitle>
      <DisplayBoxTitle>green</DisplayBoxTitle>
      <DisplayBoxBody>#8AB26B</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="greenDarker">
      <DisplayBoxSubTitle>Darker</DisplayBoxSubTitle>
      <DisplayBoxTitle>green</DisplayBoxTitle>
      <DisplayBoxBody>#75985B</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);

export const Tertiary: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="steelBlueLighter">
      <DisplayBoxSubTitle>Lighter</DisplayBoxSubTitle>
      <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
      <DisplayBoxBody>#F7FAFC</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="steelBlueLight">
      <DisplayBoxSubTitle>Light</DisplayBoxSubTitle>
      <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
      <DisplayBoxBody>#F1F5FD</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="steelBlue">
      <DisplayBoxSubTitle>Base</DisplayBoxSubTitle>
      <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
      <DisplayBoxBody>#E5EEFE</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="steelBlueDark">
      <DisplayBoxSubTitle>Dark</DisplayBoxSubTitle>
      <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
      <DisplayBoxBody>#ABB8C5</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="steelBlueDarker">
      <DisplayBoxSubTitle>Darker</DisplayBoxSubTitle>
      <DisplayBoxTitle>steelBlue</DisplayBoxTitle>
      <DisplayBoxBody>#818E9B</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);

export const Gray: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="grayLighter">
      <DisplayBoxSubTitle>Lighter</DisplayBoxSubTitle>
      <DisplayBoxTitle>gray</DisplayBoxTitle>
      <DisplayBoxBody>#F6F6F6</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="grayLight">
      <DisplayBoxSubTitle>Light</DisplayBoxSubTitle>
      <DisplayBoxTitle>gray</DisplayBoxTitle>
      <DisplayBoxBody>#F2F2F2</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="gray">
      <DisplayBoxSubTitle>Base</DisplayBoxSubTitle>
      <DisplayBoxTitle>gray</DisplayBoxTitle>
      <DisplayBoxBody>#D5D7DC</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="grayDark">
      <DisplayBoxSubTitle>Dark</DisplayBoxSubTitle>
      <DisplayBoxTitle>gray</DisplayBoxTitle>
      <DisplayBoxBody>#717171</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="grayDarker">
      <DisplayBoxSubTitle>Darker</DisplayBoxSubTitle>
      <DisplayBoxTitle>gray</DisplayBoxTitle>
      <DisplayBoxBody>#4C4C4C</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);

export const Simple: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="black">
      <DisplayBoxTitle>black</DisplayBoxTitle>
      <DisplayBoxBody>#212529</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="white">
      <DisplayBoxTitle>white</DisplayBoxTitle>
      <DisplayBoxBody>#FFFFFF</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);

export const Alert: Story = () => (
  <DisplayBoxWrapper>
    <DisplayBox background="redLighter">
      <DisplayBoxSubTitle>Lighter</DisplayBoxSubTitle>
      <DisplayBoxTitle>red</DisplayBoxTitle>
      <DisplayBoxBody>#F6F6F6</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="redLight">
      <DisplayBoxSubTitle>Light</DisplayBoxSubTitle>
      <DisplayBoxTitle>red</DisplayBoxTitle>
      <DisplayBoxBody>#F2F2F2</DisplayBoxBody>
    </DisplayBox>
    <DisplayBox background="red">
      <DisplayBoxSubTitle>Base</DisplayBoxSubTitle>
      <DisplayBoxTitle>red</DisplayBoxTitle>
      <DisplayBoxBody>#D5D7DC</DisplayBoxBody>
    </DisplayBox>
  </DisplayBoxWrapper>
);
