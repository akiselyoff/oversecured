import { useState, useMemo } from 'react';

const useSortableData = (visitors, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const getSortedVisitors = useMemo(() => {
    let sortableVisitors = [...visitors];
    if (sortConfig !== null) {
      sortableVisitors.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableVisitors;
  }, [visitors, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { visitors: getSortedVisitors, requestSort, sortConfig };
};

export default useSortableData;
