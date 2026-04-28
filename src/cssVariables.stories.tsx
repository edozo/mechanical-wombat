import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { themeCssVariables } from './cssVariables';

export default {
  title: 'Theme/CSS Variables',
} as Meta;

interface Variable {
  name: string;
  value: string;
}

const allVariables: Variable[] = themeCssVariables
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.startsWith('--mw-'))
  .map((line) => {
    const colonIdx = line.indexOf(':');
    return {
      name: line.slice(0, colonIdx).trim(),
      value: line
        .slice(colonIdx + 1)
        .replace(/;$/, '')
        .trim(),
    };
  });

const groupOrder = [
  'color-neutral',
  'color-slate',
  'color-blue',
  'color-indigo',
  'color-teal',
  'color-status',
  'color-system',
  'color-alias',
  'color-app',
  'spacing',
  'icon',
  'border-radius',
  'shadow',
  'font-family',
  'font-weight',
  'letter-spacing',
  'typography',
  'breakpoint',
];

function getGroup(name: string): string {
  const withoutPrefix = name.replace('--mw-', '');
  return groupOrder.find((g) => withoutPrefix.startsWith(g)) ?? 'other';
}

const grouped = groupOrder.reduce<Record<string, Variable[]>>((acc, group) => {
  acc[group] = allVariables.filter((v) => getGroup(v.name) === group);
  return acc;
}, {});

const isColor = (name: string) => name.startsWith('--mw-color');

const cellStyle: React.CSSProperties = { padding: '4px 8px', verticalAlign: 'middle' };
const headStyle: React.CSSProperties = { ...cellStyle, borderBottom: '2px solid #e5e7eb', textAlign: 'left' };

function VariableTable({ variables }: { variables: Variable[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'monospace', fontSize: 12 }}>
      <thead>
        <tr>
          <th style={headStyle}>Variable</th>
          <th style={headStyle}>Value</th>
          <th style={{ ...headStyle, width: 48 }}>Preview</th>
        </tr>
      </thead>
      <tbody>
        {variables.map(({ name, value }) => (
          <tr key={name} style={{ borderBottom: '1px solid #f3f4f6' }}>
            <td style={cellStyle}>{name}</td>
            <td style={{ ...cellStyle, color: '#6b7280' }}>{value}</td>
            <td style={cellStyle}>
              {isColor(name) && (
                <div
                  style={{
                    width: 24,
                    height: 24,
                    background: value,
                    border: '1px solid #e5e7eb',
                    borderRadius: 4,
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const AllVariables: StoryFn = () => (
  <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
    <h1 style={{ fontSize: 20, marginBottom: 8 }}>CSS Variables</h1>
    <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32 }}>
      Use these in any app via{' '}
      <code style={{ background: '#f3f4f6', padding: '2px 4px', borderRadius: 3 }}>var(--mw-*)</code>. Add{' '}
      <code style={{ background: '#f3f4f6', padding: '2px 4px', borderRadius: 3 }}>{'<ThemeCssVariables />'}</code> or
      inject <code style={{ background: '#f3f4f6', padding: '2px 4px', borderRadius: 3 }}>themeCssVariables</code> into{' '}
      <code style={{ background: '#f3f4f6', padding: '2px 4px', borderRadius: 3 }}>:root</code> first.
    </p>
    {groupOrder.map((group) =>
      grouped[group].length === 0 ? null : (
        <section key={group} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
            {group}
          </h2>
          <VariableTable variables={grouped[group]} />
        </section>
      ),
    )}
  </div>
);
