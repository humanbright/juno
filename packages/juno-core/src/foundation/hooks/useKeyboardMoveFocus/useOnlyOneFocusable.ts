import { combineProps } from '../../utils';
import { useId } from '../useId';

const MOVE_ATTR_KEY = 'data-move-focused';

export type UseOnlyOneFocusableParams = {
  /** current focused index `ref` */
  focusedIndexRef: React.MutableRefObject<number>;
  /** wrap container for below all only have one focusable */
  containerRef: React.RefObject<HTMLElement>;
};

/**
 * when focus in container below element with binding `getItemProps`,
 * that will only have one element can be focusable.
 */
export const useOnlyOneFocusable = ({
  focusedIndexRef,
  containerRef,
}: UseOnlyOneFocusableParams) => {
  const moveFocusedId = useId(MOVE_ATTR_KEY, true);

  const getIndexElm = (toIndex: number) =>
    containerRef.current?.querySelector<HTMLElement>(
      `[${moveFocusedId}="${toIndex}"]`,
    );

  const setIndexTabIndex = (toIndex: number) => {
    const toElm = getIndexElm(toIndex);
    if (toElm) {
      const prevElm = containerRef.current?.querySelector<HTMLElement>(
        `[${moveFocusedId}][tabindex="0"]`,
      );

      prevElm?.setAttribute('tabindex', '-1');
      toElm.setAttribute('tabindex', '0');
    }
  };

  // * retry when not get target element
  const focusIndex = (toIndex: number) => {
    const toElm = getIndexElm(toIndex);
    toElm?.focus();
  };

  return {
    moveFocusedId,
    focusIndex,
    setIndexTabIndex,
    getItemProps: (
      index: number,
      options?: Omit<React.HTMLAttributes<HTMLElement>, 'children'>,
    ) => {
      return combineProps(
        {
          [moveFocusedId]: index,
          tabIndex: index === focusedIndexRef.current ? 0 : -1,
          onFocus: () => {
            focusedIndexRef.current = index;
            setIndexTabIndex(index);
          },
        },
        options,
      );
    },
  };
};
