import useSortableData from '../../hooks/useSortableData';

const VisitorsTable = props => {
  const { visitors, requestSort, sortConfig } = useSortableData(props.visitors);
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <caption>Visitors</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('firstName')}
              className={getClassNamesFor('name')}
            >
              First Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('secondName')}
              className={getClassNamesFor('name')}
            >
              Second Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('entryMoment')}
              className={getClassNamesFor('name')}
            >
              Entry Moment
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {visitors.map(visitor => (
          <tr key={visitor.id}>
            <td>{visitor.firstName}</td>
            <td>{visitor.secondName}</td>
            <td>{visitor.entryMoment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VisitorsTable;
