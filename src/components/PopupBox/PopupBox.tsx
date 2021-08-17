import React, { forwardRef, ReactNode, useMemo } from 'react';

import {
  combineProps,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../foundation';
import { RcButton, RcButtonProps } from '../Buttons/Button';
import {
  RcDialog,
  RcDialogActions,
  RcDialogActionsProps,
  RcDialogContent,
  RcDialogContentProps,
  RcDialogContentText,
  RcDialogProps,
  RcDialogTitle,
  RcDialogTitleProps,
} from '../Dialog';
import { RcLoading } from '../Loading';

type RcPopupBoxProps = {
  /** title render */
  title?: ReactNode;
  /** footer render */
  footer?: ReactNode;
  /**
   * when loading, all action button will be disabled
   * and confirm button will be loading,
   *
   * - when loading is `true`, `disableEscapeKeyDown`, `disableBackdropClick` will be `true`
   * - you still can set those value with target props,
   * @example
   * disableEscapeKeyDown={false}
   * disableBackdropClick={false}
   */
  loading?: boolean;
  /**
   * show loadingOverlay to cover whole modal
   *
   * - when loadingOverlay is `true`, `disableEscapeKeyDown`, `disableBackdropClick` will be `true`
   * - you still can set those value with target props,
   * @example
   * disableEscapeKeyDown={false}
   * disableBackdropClick={false}
   */
  loadingOverlay?: boolean;
  /** content on confirm button */
  confirmButtonText?: ReactNode;
  /** props apply for cancel button */
  confirmButtonProps?: RcButtonProps;
  /** trigger when confirm */
  onConfirm?(event?: React.MouseEvent): any;
  /** content on cancel button */
  cancelButtonText?: ReactNode;
  /** props apply for cancel button */
  cancelButtonProps?: RcButtonProps;
  /** trigger when cancel */
  onCancel?: (
    event: {},
    reason: 'backdropClick' | 'escapeKeyDown' | 'cancelClick',
  ) => void;
  TitleProps?: RcDialogTitleProps;
  ContentProps?: RcDialogContentProps;
  ActionsProps?: RcDialogActionsProps;
} & RcBaseProps<RcDialogProps, 'title'>;

type RcDialogFuncProps = { componentProps?: any } & Omit<RcDialogProps, 'open'>;

const _RcPopupBox = forwardRef<any, RcPopupBoxProps>(
  (inProps: RcPopupBoxProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcPopupBox' });
    const {
      size,
      title,
      footer,
      loadingOverlay,
      loading,
      // ok btn
      confirmButtonText,
      confirmButtonProps,
      onConfirm,
      // cancel btn
      cancelButtonText,
      cancelButtonProps,
      onCancel,
      TitleProps,
      ContentProps,
      ActionsProps,
      children,
      onClose,
      open,
      ...rest
    } = props;

    const isXsmall = size === 'xsmall';

    const { onClose: handleClose } = useMemo(
      () => combineProps({ onClose: onCancel }, { onClose }),
      [onCancel, onClose],
    );

    return (
      <RcDialog
        ref={ref}
        size={size}
        disableEscapeKeyDown={loading || loadingOverlay}
        disableBackdropClick={loading || loadingOverlay}
        onClose={handleClose}
        open={open}
        {...rest}
      >
        <RcLoading loading={loadingOverlay!}>
          <RcDialogTitle
            size={size}
            data-test-automation-id={'DialogTitle'}
            {...TitleProps}
          >
            {title}
          </RcDialogTitle>
          <RcDialogContent
            size={size}
            data-test-automation-id={'DialogContent'}
            {...ContentProps}
          >
            {typeof children === 'string' ? (
              <RcDialogContentText>{children}</RcDialogContentText>
            ) : (
              children
            )}
          </RcDialogContent>
          {footer !== null && (
            <RcDialogActions
              size={size}
              direction={isXsmall ? 'vertical' : 'horizontal'}
              data-test-automation-id={'DialogActions'}
              {...ActionsProps}
            >
              {footer || (
                <>
                  {cancelButtonText && (
                    <RcButton
                      fullWidth={isXsmall}
                      variant="text"
                      onClick={(e) => onCancel?.(e, 'cancelClick')}
                      data-test-automation-id="DialogCancelButton"
                      disabled={loading}
                      {...cancelButtonProps}
                    >
                      {cancelButtonText}
                    </RcButton>
                  )}
                  {confirmButtonText && (
                    <RcButton
                      fullWidth={isXsmall}
                      onClick={onConfirm}
                      variant="contained"
                      data-test-automation-id="DialogOKButton"
                      disabled={loading}
                      loading={loading}
                      {...confirmButtonProps}
                    >
                      {confirmButtonText}
                    </RcButton>
                  )}
                </>
              )}
            </RcDialogActions>
          )}
        </RcLoading>
      </RcDialog>
    );
  },
);

/**
 * display a simple message or display a message and take user's confirmation on it or display a popup to take a user's input value
 */
const RcPopupBox = styled(_RcPopupBox)``;

RcPopupBox.defaultProps = {
  size: 'medium',
};

export { RcPopupBox, RcPopupBoxProps, RcDialogFuncProps };
