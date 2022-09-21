import React from 'react';
import VisitorsTable from './components/VisitorsTable/VisitorsTable.jsx';

// let date = new Date().toLocaleString();

const App = () => {
  return (
    <>
      <VisitorsTable
        visitors={[
          {
            id: 1,
            firstName: 'John',
            secondName: 'Doe',
            entryMoment: new Date().toLocaleString(),
          },
          {
            id: 2,
            firstName: 'Ann',
            secondName: 'Smith',
            entryMoment: new Date().toLocaleString(),
          },
          {
            id: 3,
            firstName: 'Ali',
            secondName: 'Usuf',
            entryMoment: new Date().toLocaleString(),
          },
        ]}
      />
    </>
  );
};

export default App;
