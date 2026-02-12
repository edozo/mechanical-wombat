# ButtonV3 rules

## Intent (`variant`) vs expression (`style`)

- `variant` controls emphasis and semantic intent: `primary`, `secondary`, `tertiary`, `quaternary`.
- `style` controls visual treatment: `solid`, `outline`, `ghost`.
- All combinations are supported, including four solid options:
  - `primary + solid`
  - `secondary + solid`
  - `tertiary + solid`
  - `quaternary + solid`

## Usage matrix

- `primary + solid`: strongest action, commit-only.
- `primary + outline`: strong secondary option for high-emphasis flows.
- `primary + ghost`: text-like primary emphasis on quiet surfaces.
- `secondary + solid`: medium emphasis indigo-tinted action.
- `secondary + outline`: indigo-accent supporting action with clear edge.
- `secondary + ghost`: indigo-accent low/medium emphasis text action.
- `tertiary + solid`: low emphasis filled option.
- `tertiary + outline`: low emphasis with subtle boundary.
- `tertiary + ghost`: lowest emphasis text-style action.
- `quaternary + solid`: teal-accent filled option for supporting emphasis actions.
- `quaternary + outline`: teal-accent supporting action with clear edge.
- `quaternary + ghost`: teal-accent low emphasis text action.

## Accent guardrails

- `secondary` (indigo): default supporting emphasis path.
- `quaternary` (teal): optional accent for analytical/supporting actions.
- Keep teal non-semantic (never use it to imply success/warning/danger state).

## Primary guardrails

- Use `variant="primary"` for commit actions only.
- Use one primary action per screen (or block).
- Avoid using primary for navigation actions.

## Status exception

- `status` is only valid when `context="notification"`.
- If `status` is passed in `context="default"`, `ButtonV3` warns in development and falls back to neutral intent colors.

## Button vs link mode

- `ButtonV3` renders as a native `<button>` by default.
- Set `asChild` to render styles onto a child element (for example an `<a>`, router `Link`, or router `NavLink`).
- Use button mode for in-app actions (`onClick`, form submit/reset).
- Use `asChild` mode for navigation/external URLs.

### Usage examples

```tsx
// Button mode (default)
<ButtonV3 variant="primary" onClick={saveChanges}>
  Save
</ButtonV3>
```

Rendered in browser (approx):

```html
<button type="button" class="...button-v3-classes...">Save</button>
```

```tsx
// Anchor mode via asChild
<ButtonV3 asChild variant="secondary" style="outline">
  <a href="https://www.edozo.com" target="_blank" rel="noopener noreferrer">
    Open Edozo
  </a>
</ButtonV3>
```

Rendered in browser (approx):

```html
<a href="https://www.edozo.com" target="_blank" rel="noopener noreferrer" class="...button-v3-classes...">
  Open Edozo
</a>
```

```tsx
// Router mode via asChild (consumer app)
<ButtonV3 asChild variant="secondary" style="ghost">
  <NavLink to="/settings">Settings</NavLink>
</ButtonV3>
```

Rendered in browser (approx):

```html
<a href="/settings" class="...button-v3-classes...">Settings</a>
```

## Icon-only rule

- `iconOnly` buttons require an `aria-label`.
- Reserve icon-only usage for universal actions (for example close, overflow, search).
