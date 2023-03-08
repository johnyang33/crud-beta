import Table from './Table';
import { useState } from 'react';

function SortableTable(props) {
  const { config, data } = props;
  const [ sortOrder, setSortOrder ] = useState(null);
  const [ sortBy, setSortBy ] = useState(null);

  //creates an updated config file that is then passed onto TABLE component to render
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => <th onClick={() => handleClick(column.label)}>{column.label}</th>,
    };
  });

  const handleClick = (label) => { 
    // if sortby is defined AND label ISNOT equal to sortBy
    if ( sortBy && label !== sortBy ) { 
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if( sortOrder === null ) { 
      setSortOrder('asc');
      setSortBy(label);
    }else if (sortOrder === 'asc'){
      setSortOrder('desc')
      setSortBy(label);
    }else if(sortOrder === 'desc'){
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // only sort data if sortOrder && sortBy are not null
  // make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting

  let sortedData = data;
  
  if( sortOrder && sortBy ) { 
    const { sortValue } = config.find(column => column.label === sortBy);
    
    sortedData = [...data].sort((a,b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') { 
        return valueA.localeCompare(valueB) * reverseOrder;
      }else { 
        return ( valueA - valueB ) * reverseOrder;
      }
    });
  }

  return <div>
    {sortOrder} / {sortBy}
    <Table {...props} data={sortedData} config={updatedConfig} />
  </div>
}

export default SortableTable;