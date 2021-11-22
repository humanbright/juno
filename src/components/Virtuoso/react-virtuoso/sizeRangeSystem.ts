import * as u from '@virtuoso.dev/urx';

import { tupleComparator } from './comparators';
import { domIOSystem, DOWN, ScrollDirection, UP } from './domIOSystem';

export type NumberTuple = [number, number];
export type Overscan = number | { main: number; reverse: number };
export const TOP = 'top' as const;
export const BOTTOM = 'bottom' as const;
export const NONE = 'none' as const;
export type ListEnd = typeof TOP | typeof BOTTOM;
export type ChangeDirection = typeof UP | typeof DOWN | typeof NONE;

export const getOverscan = (
  overscan: Overscan,
  end: ListEnd,
  direction: ScrollDirection,
) => {
  if (typeof overscan === 'number') {
    return (direction === UP && end === TOP) ||
      (direction === DOWN && end === BOTTOM)
      ? overscan
      : 0;
  }
  if (direction === UP) {
    return end === TOP ? overscan.main : overscan.reverse;
  }
  return end === BOTTOM ? overscan.main : overscan.reverse;
};

export const sizeRangeSystem = u.system(
  ([{ scrollTop, viewportHeight, deviation, headerHeight }]) => {
    const listBoundary = u.stream<NumberTuple>();
    const topListHeight = u.statefulStream(0);
    const overscan = u.statefulStream<Overscan>(0);

    const visibleRange = u.statefulStreamFromEmitter(
      u.pipe(
        u.combineLatest(
          u.duc(scrollTop),
          u.duc(viewportHeight),
          u.duc(headerHeight),
          u.duc(listBoundary, tupleComparator),
          u.duc(overscan),
          u.duc(topListHeight),
          u.duc(deviation),
        ),
        u.map(
          ([
            scrollTop,
            viewportHeight,
            headerHeight,
            // @ts-ignore
            [listTop, listBottom],
            overscan,
            topListHeight,
            deviation,
          ]) => {
            const top = scrollTop - headerHeight - deviation;
            let direction: ChangeDirection = NONE;

            listTop -= deviation;
            listBottom -= deviation;

            if (listTop > scrollTop + topListHeight) {
              direction = UP;
            }

            if (listBottom < scrollTop + viewportHeight) {
              direction = DOWN;
            }

            if (direction !== NONE) {
              return [
                Math.max(top - getOverscan(overscan, TOP, direction), 0),
                top + viewportHeight + getOverscan(overscan, BOTTOM, direction),
              ] as NumberTuple;
            }

            return null;
          },
        ),
        u.filter((value) => value != null),
        u.distinctUntilChanged(tupleComparator as any),
      ),
      [0, 0],
    ) as unknown as u.StatefulStream<NumberTuple>;

    return {
      // input
      listBoundary,
      overscan,
      topListHeight,

      // output
      visibleRange,
    };
  },
  u.tup(domIOSystem),
  { singleton: true },
);
