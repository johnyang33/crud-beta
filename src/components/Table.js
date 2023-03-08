import { Fragment } from 'react';
import TableList from './TableList';

function Table( {data, config, keyFn} ) { 

  const renderedHeaders = config.map((column) => {
    if(column.header){ 
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <span key={column.label}>{column.label}</span>
  });

  // const renderedRows = data.map((rowData) => { 
  //   const renderedCells = config.map((column) => {
  //     return <td key={column.label}>{column.render(rowData)}</td>
  //   });

  //   return (
  //     <tr key={keyFn(rowData)}>
  //       {renderedCells}
  //     </tr>
  //   );
  // });

  return (
      <div>
        {renderedHeaders}
      <TableList data={data} config={config} keyFn={keyFn}/>
      </div>
  )

}


export default Table;