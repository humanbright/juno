import * as u from '@virtuoso.dev/urx';

import { alignToBottomSystem } from './alignToBottomSystem';
import { domIOSystem } from './domIOSystem';
import { followOutputSystem } from './followOutputSystem';
import { groupedListSystem } from './groupedListSystem';
import { initialItemCountSystem } from './initialItemCountSystem';
import { initialScrollTopSystem } from './initialScrollTopSystem';
import { initialTopMostItemIndexSystem } from './initialTopMostItemIndexSystem';
import { listStateSystem } from './listStateSystem';
import { propsReadySystem } from './propsReadySystem';
import { scrollSeekSystem } from './scrollSeekSystem';
import { scrollToIndexSystem } from './scrollToIndexSystem';
import { sizeRangeSystem } from './sizeRangeSystem';
import { sizeSystem } from './sizeSystem';
import { topItemCountSystem } from './topItemCountSystem';
import { totalListHeightSystem } from './totalListHeightSystem';
import { upwardScrollFixSystem } from './upwardScrollFixSystem';
import { windowScrollerSystem } from './windowScrollerSystem';

// workaround the growing list of systems below
// fix this with 4.1 recursive conditional types
const featureGroup1System = u.system(
  ([
    sizeRange,
    initialItemCount,
    propsReady,
    scrollSeek,
    totalListHeight,
    initialScrollTopSystem,
    alignToBottom,
    windowScroller,
  ]) => {
    return {
      ...sizeRange,
      ...initialItemCount,
      ...propsReady,
      ...scrollSeek,
      ...totalListHeight,
      ...initialScrollTopSystem,
      ...alignToBottom,
      ...windowScroller,
    };
  },
  u.tup(
    sizeRangeSystem,
    initialItemCountSystem,
    propsReadySystem,
    scrollSeekSystem,
    totalListHeightSystem,
    initialScrollTopSystem,
    alignToBottomSystem,
    windowScrollerSystem,
  ),
);

export const listSystem = u.system(
  ([
    {
      totalCount,
      sizeRanges,
      fixedItemSize,
      defaultItemSize,
      trackItemSizes,
      itemSize,
      data,
      firstItemIndex,
      groupIndices,
    },
    { initialTopMostItemIndex, scrolledToInitialItem },
    domIO,
    followOutput,
    { listState, topItemsIndexes, ...flags },
    { scrollToIndex },
    ,
    { topItemCount },
    { groupCounts },
    featureGroup1,
  ]) => {
    u.connect(flags.rangeChanged, featureGroup1.scrollSeekRangeChanged);
    u.connect(
      u.pipe(featureGroup1.windowViewportRect, u.map(u.prop('visibleHeight'))),
      domIO.viewportHeight,
    );

    return {
      // input
      totalCount,
      data,
      firstItemIndex,
      sizeRanges,
      initialTopMostItemIndex,
      scrolledToInitialItem,
      topItemsIndexes,
      topItemCount,
      groupCounts,
      fixedItemHeight: fixedItemSize,
      defaultItemHeight: defaultItemSize,
      ...followOutput,

      // output
      listState,
      scrollToIndex,
      trackItemSizes,
      itemSize,
      groupIndices,

      // exported from stateFlagsSystem
      ...flags,
      // the bag of IO from featureGroup1System
      ...featureGroup1,
      ...domIO,
    };
  },
  u.tup(
    sizeSystem,
    initialTopMostItemIndexSystem,
    domIOSystem,
    followOutputSystem,
    listStateSystem,
    scrollToIndexSystem,
    upwardScrollFixSystem,
    topItemCountSystem,
    groupedListSystem,
    featureGroup1System,
  ),
);
