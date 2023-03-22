import { useState, useEffect } from 'react';
import axios from 'axios';
import SortableTable from './components/SortableTable';

function App() { 
  const [data, setData] = useState([]);

  const fetchData = async () => { 
    const response =  await axios.get('http://localhost:3001/data');
    setData(response.data);
  }

  useEffect(()=> { 
    fetchData();
  }, []);

  // const data = [
  //   { name: 'Orange', color: 'bg-orange-500', score: 5 },
  //   { name: 'Apple', color: 'bg-red-500', score: 3 },
  //   { name: 'Banana', color: 'bg-yellow-500', score: 1 },
  //   { name: 'Lime', color: 'bg-green-500', score: 4 },
  // ]

  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name },
    { 
      label: 'Color',
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    }
  ];

   const keyFn = (fruit) => { 
    return fruit.name;
  };

  return (
    <SortableTable data={data} config={config} keyFn={keyFn}/>
  );

}

export default App;