import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';

const getDeepValue = <T extends object, K extends keyof T>(
  obj: T,
  path = 'id'
) => {
  const pathArr = path.split('.');

  // @ts-ignore
  return pathArr.reduce((acc: T, key) => acc && acc[key], obj);
};

type useNavigateListProps<T, K extends keyof T> = {
  list: T[];
  onSelect: (item: T) => void;
  GetEmptySearch: boolean;
  EmptySearch: (value: string) => void;
  indexPath?: K;
  vertical?: boolean;
};

const useNavigateList = <T extends object, K extends keyof T>({
  list,
  GetEmptySearch,
  EmptySearch,
  onSelect,
  indexPath,
  vertical = true,
}: useNavigateListProps<T, K>) => {
  const [cursor, setCursor] = useState(-1);

  const prevItemKey = useMemo(
    () => (vertical ? 'ArrowUp' : 'ArrowLeft'),
    [vertical]
  );

  const nextItemKey = useMemo(
    () => (vertical ? 'ArrowDown' : 'ArrowRight'),
    [vertical]
  );

  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === prevItemKey) {
        const value = cursor > 0 ? cursor - 1 : list.length - 1;
        onSelect(list[value] as T);
        setCursor(value);
      } else if (key === nextItemKey) {
        const value = cursor < list.length - 1 ? cursor + 1 : 0;
        onSelect(list[value] as T);
        setCursor(value);
      } else if (key === 'Enter') {
        onSelect(list[cursor] as T);
        // Proceed Search
      }
    },
    [cursor, list, nextItemKey, prevItemKey]
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]);

  useEffect(() => {
    if (GetEmptySearch) setCursor(-1);
  }, [GetEmptySearch]);

  const onMouseEnter = useCallback(
    (hoveredItem: T) => {
      const value = list.findIndex(
        (listItem) =>
          getDeepValue(listItem, indexPath as string) ===
          getDeepValue(hoveredItem, indexPath as string)
      );
      // onSelect(list[value] as T);
      setCursor(value);
    },
    [indexPath, list]
  );

  const onMouseLeave = useCallback(() => {
    setCursor(-1);
  }, [indexPath, list]);

  return useMemo(
    () => ({
      activeIndex: cursor,
      itemProps: (item: T) => ({
        onMouseLeave: () => onMouseLeave(),
        onMouseEnter: () => onMouseEnter(item),
        onClick: () => onSelect(item),
      }),
    }),
    [cursor, onMouseEnter]
  );
};

export default useNavigateList;
