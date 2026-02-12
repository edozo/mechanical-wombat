import { Fragment, forwardRef, useEffect } from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { IconSlot, Spinner, SpinnerWrapper, StyledButtonV3 } from 'ButtonV3/ButtonV3.styles';
import {
  ButtonV3Context,
  ButtonV3Size,
  ButtonV3Status,
  ButtonV3Style,
  ButtonV3Variant,
} from 'ButtonV3/utils/buttonV3StyleTokens';

type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'size'>;
type NativeSlotProps = Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'children'>;

/**
 * Icon placement is mutually exclusive:
 * include either `leadingIcon` or `trailingIcon`, or neither, but never both.
 */
type IconPlacementProps =
  | { /** Icon shown before label text. */ leadingIcon: React.ReactNode; trailingIcon?: never }
  | { leadingIcon?: never; /** Icon shown after label text. */ trailingIcon: React.ReactNode }
  | { leadingIcon?: undefined; trailingIcon?: undefined };

interface ButtonV3BaseProps {
  /** Visual intent: primary, secondary, tertiary, quaternary. */
  variant?: ButtonV3Variant;
  /** Treatment style: solid, outline, ghost. */
  style?: ButtonV3Style;
  /** Size scale for spacing/text/icons. */
  size?: ButtonV3Size;
  /** Renders icon-only button; requires aria-label. */
  iconOnly?: boolean;
  /** Shows spinner and disables interactions. */
  isLoading?: boolean;
  /** Disables the button. */
  disabled?: boolean;
  /** Context for behavior rules (e.g. notification status). */
  context?: ButtonV3Context;
  /** Status tone; applied when context='notification'. */
  status?: ButtonV3Status;
  /** Expands button to full container width. */
  fullWidth?: boolean;
  /** Render styles onto a child element (for Link/NavLink/a) using Radix Slot. */
  asChild?: boolean;
}

type ButtonElementProps = NativeButtonProps & {
  asChild?: false;
};

type AsChildElementProps = NativeSlotProps & {
  asChild: true;
  children: React.ReactElement;
};

/**
 * Render mode is controlled by `asChild`:
 * - `asChild` false/omitted => renders as `<button>`
 * - `asChild` true => renders styles onto the child element (e.g. Link/NavLink/a)
 */
export type ButtonV3Props = ButtonV3BaseProps & IconPlacementProps & (ButtonElementProps | AsChildElementProps);

const isDevelopment = process.env.NODE_ENV !== 'production';

export const ButtonV3 = forwardRef<HTMLButtonElement | HTMLElement, ButtonV3Props>((props, ref) => {
  const {
    variant = 'secondary',
    style = 'solid',
    size = 'md',
    leadingIcon,
    trailingIcon,
    iconOnly = false,
    isLoading = false,
    disabled = false,
    context = 'default',
    status,
    fullWidth = false,
    asChild = false,
    children,
    ...rest
  } = props;

  const ariaLabel = (rest as { 'aria-label'?: string })['aria-label'];

  if (iconOnly && !ariaLabel) {
    throw new Error('ButtonV3: iconOnly buttons require an aria-label.');
  }

  if (leadingIcon && trailingIcon) {
    throw new Error('ButtonV3: use either leadingIcon or trailingIcon, not both.');
  }

  const shouldWarnStatusContext = Boolean(status && context !== 'notification');

  useEffect(() => {
    if (isDevelopment && shouldWarnStatusContext) {
      // eslint-disable-next-line no-console
      console.warn(
        'ButtonV3: status is only supported when context="notification". Falling back to neutral intent colors.',
      );
    }
  }, [shouldWarnStatusContext]);

  const resolvedStatus = context === 'notification' ? status : undefined;
  const isDisabled = disabled || isLoading;

  if (asChild) {
    const { onClick, tabIndex, ...slotRest } = rest as AsChildElementProps;
    const slotRef = ref as React.Ref<HTMLElement>;

    const handleAsChildClick: React.MouseEventHandler<HTMLElement> = event => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick?.(event);
    };

    return (
      <StyledButtonV3
        as={Slot}
        ref={slotRef}
        onClick={handleAsChildClick}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : tabIndex}
        data-variant={variant}
        data-style={style}
        $variant={variant}
        $style={style}
        $size={size}
        $status={resolvedStatus}
        $fullWidth={fullWidth}
        $iconOnly={iconOnly}
        $isLoading={isLoading}
        {...slotRest}
      >
        {isLoading && (
          <SpinnerWrapper aria-hidden="true">
            <Spinner data-testid="button-v3-spinner" />
          </SpinnerWrapper>
        )}
        {iconOnly && leadingIcon && (
          <IconSlot aria-hidden="true" $size={size} data-icon-position="leading">
            {leadingIcon}
          </IconSlot>
        )}
        {iconOnly && !leadingIcon && trailingIcon && (
          <IconSlot aria-hidden="true" $size={size} data-icon-position="trailing">
            {trailingIcon}
          </IconSlot>
        )}
        {!iconOnly && leadingIcon && (
          <IconSlot aria-hidden="true" $size={size} data-icon-position="leading">
            {leadingIcon}
          </IconSlot>
        )}
        {!iconOnly && <Slottable>{children}</Slottable>}
        {!iconOnly && trailingIcon && (
          <IconSlot aria-hidden="true" $size={size} data-icon-position="trailing">
            {trailingIcon}
          </IconSlot>
        )}
      </StyledButtonV3>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonElementProps;
  const buttonRef = ref as React.Ref<HTMLButtonElement>;

  return (
    <StyledButtonV3
      ref={buttonRef}
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      data-variant={variant}
      data-style={style}
      $variant={variant}
      $style={style}
      $size={size}
      $status={resolvedStatus}
      $fullWidth={fullWidth}
      $iconOnly={iconOnly}
      $isLoading={isLoading}
      {...buttonRest}
    >
      {isLoading && (
        <SpinnerWrapper aria-hidden="true">
          <Spinner data-testid="button-v3-spinner" />
        </SpinnerWrapper>
      )}
      {iconOnly ? (
        <Fragment>
          {leadingIcon && (
            <IconSlot aria-hidden="true" $size={size} data-icon-position="leading">
              {leadingIcon}
            </IconSlot>
          )}
          {!leadingIcon && trailingIcon && (
            <IconSlot aria-hidden="true" $size={size} data-icon-position="trailing">
              {trailingIcon}
            </IconSlot>
          )}
        </Fragment>
      ) : (
        <Fragment>
          {leadingIcon && (
            <IconSlot aria-hidden="true" $size={size} data-icon-position="leading">
              {leadingIcon}
            </IconSlot>
          )}
          {children}
          {trailingIcon && (
            <IconSlot aria-hidden="true" $size={size} data-icon-position="trailing">
              {trailingIcon}
            </IconSlot>
          )}
        </Fragment>
      )}
    </StyledButtonV3>
  );
});

ButtonV3.displayName = 'ButtonV3';
