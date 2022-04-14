import * as u from '@virtuoso.dev/urx';

import { empty } from './AATree';
import { domIOSystem } from './domIOSystem';
import { propsReadySystem } from './propsReadySystem';
import { IndexLocation, scrollToIndexSystem } from './scrollToIndexSystem';
import { sizeSystem } from './sizeSystem';

export function getInitialTopMostItemIndexNumber(
  location: IndexLocation,
  totalCount: number,
): number {
  const lastIndex = totalCount - 1;
  const index =
    typeof location === 'number'
      ? location
      : location.index === 'LAST'
      ? lastIndex
      : location.index;
  return index;
}

export const initialTopMostItemIndexSystem = u.system(
  ([
    { sizes, listRefresh, defaultItemSize },
    { scrollTop },
    { scrollToIndex },
    { didMount },
  ]) => {
    const scrolledToInitialItem = u.statefulStream(true);
    const initialTopMostItemIndex = u.statefulStream<IndexLocation>(0);

    u.connect(
      u.pipe(
        didMount,
        u.withLatestFrom(initialTopMostItemIndex),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        u.filter(([, location]) => !!location),
        u.mapTo(false),
      ),
      scrolledToInitialItem,
    );

    u.subscribe(
      u.pipe(
        u.combineLatest(listRefresh, didMount),
        u.withLatestFrom(scrolledToInitialItem, sizes, defaultItemSize),
        u.filter(
          ([
            [, didMount],
            scrolledToInitialItem,
            { sizeTree },
            defaultItemSize,
          ]) => {
            return (
              didMount &&
              (!empty(sizeTree) || defaultItemSize !== undefined) &&
              !scrolledToInitialItem
            );
          },
        ),
        u.withLatestFrom(initialTopMostItemIndex),
      ),
      ([, initialTopMostItemIndex]) => {
        setTimeout(() => {
          u.handleNext(scrollTop, () => {
            u.publish(scrolledToInitialItem, true);
          });
          u.publish(scrollToIndex, initialTopMostItemIndex);
        });
      },
    );

    return {
      scrolledToInitialItem,
      initialTopMostItemIndex,
    };
  },
  u.tup(sizeSystem, domIOSystem, scrollToIndexSystem, propsReadySystem),
  { singleton: true },
);
