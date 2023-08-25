import React, { useState } from 'react';
import { GridComponent, Inject, Selection, CommandColumn } from '@syncfusion/ej2-react-grids';
import { Button } from '@syncfusion/ej2-react-buttons';

const GridWithDetails = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const gridData = [
    { ID: 1, Name: 'John Doe', Age: 25 },
    { ID: 2, Name: 'Jane Smith', Age: 30 },
    { ID: 3, Name: 'Bob Johnson', Age: 35 },
  ];

  const handleRowSelected = (args) => {
    const selectedRow = args.data;
    setSelectedRecord(selectedRow);
  };

  const handleOpenDetailsWindow = () => {
    if (selectedRecord) {
      // Lógica para abrir uma nova janela com os detalhes da linha selecionada
      // Você pode usar bibliotecas como React Router, Modal ou criar sua própria implementação de janela
      window.open(`/details/${selectedRecord.ID}`, '_blank');
    }
  };

  return (
    <div>
      <Button onClick={handleOpenDetailsWindow} disabled={!selectedRecord}>
        Abrir Detalhes
      </Button>
      <GridComponent
        dataSource={gridData}
        allowPaging={true}
        selectionSettings={{ type: 'Single' }}
        rowSelected={handleRowSelected}
      >
        <Inject services={[Selection, CommandColumn]} />
      </GridComponent>
    </div>
  );
};

export default GridWithDetails;