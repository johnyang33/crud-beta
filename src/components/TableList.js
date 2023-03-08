import TableItem from './TableItem';

function TableList( { data, config, keyFn }) { 

  // const renderedRows = data.map((row) => {
  //   return <TableItem key={keyFn(row)} row={row} config={config}/>
  // });

  const renderedRows = data.map((rowData) => {
    //console.log(rowData);
    return <TableItem row={rowData} keyFn={keyFn} config={config}/>;
  });

  return renderedRows;
}

export default TableList;