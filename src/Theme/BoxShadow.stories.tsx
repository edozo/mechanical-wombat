import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { Fragment } from 'react';

export default {
  title: 'Theme/Box Shadow',
} as Meta;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.base};
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral[50]};
  padding: ${({ theme }) => theme.spacing.md};
`;

const ShadowPreview = styled.div<{ $shadow: string }>`
  height: 88px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  box-shadow: ${({ $shadow }) => $shadow};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.neutral[800]};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const Value = styled.code`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: ${({ theme }) => theme.typography.scale.xs.size};
  line-height: ${({ theme }) => theme.typography.scale.xs.lineHeight};
  word-break: break-word;
`;

const SectionTitle = styled.h3`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.base} 0;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.md.size};
  line-height: ${({ theme }) => theme.typography.scale.md.lineHeight};
`;

const SectionNote = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xsmall} ${({ theme }) => theme.spacing.base} 0;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-size: ${({ theme }) => theme.typography.scale.sm.size};
  line-height: ${({ theme }) => theme.typography.scale.sm.lineHeight};
`;

export const BoxShadow: StoryFn = () => {
  const theme = useTheme();

  const preferredShadowTokens = [
    { name: 'sm', value: theme.boxShadow.sm },
    { name: 'md', value: theme.boxShadow.md },
    { name: 'lg', value: theme.boxShadow.lg },
    { name: 'xl', value: theme.boxShadow.xl },
    { name: '2xl', value: theme.boxShadow['2xl'] },
  ];

  const legacyShadowTokens = [
    { name: 'xsmall', value: theme.boxShadow.xsmall },
    { name: 'small', value: theme.boxShadow.small },
    { name: 'standard', value: theme.boxShadow.standard },
    { name: 'large', value: theme.boxShadow.large },
    { name: 'xlarge', value: theme.boxShadow.xlarge },
  ];

  return (
    <Fragment>
      <SectionTitle>New shadow tokens (preferred)</SectionTitle>
      <SectionNote>Use these tokens for all new work.</SectionNote>
      <Grid>
        {preferredShadowTokens.map(token => (
          <Card key={`preferred-${token.name}`}>
            <ShadowPreview $shadow={token.value} />
            <Label>{token.name}</Label>
            <Value>{token.value}</Value>
          </Card>
        ))}
      </Grid>

      <SectionTitle>Legacy shadow tokens (deprecated)</SectionTitle>
      <SectionNote>Keep only while migrating older components.</SectionNote>
      <Grid>
        {legacyShadowTokens.map(token => (
          <Card key={`legacy-${token.name}`}>
            <ShadowPreview $shadow={token.value} />
            <Label>{token.name}</Label>
            <Value>{token.value}</Value>
          </Card>
        ))}
      </Grid>
    </Fragment>
  );
};
