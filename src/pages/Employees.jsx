import { L10n } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import React, { useEffect, useState } from "react";

import { Header } from "../components";

import axios from "axios";

import { GrLocation } from "react-icons/gr";

import Detail from "./Detail";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
L10n.load({
  "pt-BR": {
    grid: {
      Search: "Busca",
    },
    pager: {
      currentPageInfo: "{0} de {1} páginas",
      firstPageTooltip: "Ir para primeira página",
      lastPageTooltip: "Ir para última página",
      nextPageTooltip: "Próxima página",
      nextPagerTooltip: "Paginação Posterior",
      previousPageTooltip: "Página anterior",
      previousPagerTooltip: "Paginação Anterior",
      totalItemsInfo: "({0} contatos)",
    },
  },
});

const Employees = () => {
  // const [selectedData, setSelectedData] = useState(null);
  const [contacts, setContacts] = useState([]);
  // ******
  const [state, setState] = useState({});
  // *****
  const [selectedRow, setSelectedRow] = useState();
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log()
    axios
      .get("https://node-deploy-sacci-1.onrender.com/api/contacts/all")
    
      .then((res) => {
        setContacts(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  //o que estava externo em mock - inicio

  const gridContactProfile = (props) => (
    <div className="flex items-start gap-2">
      <img
        className="rounded-full w-10 h-10"
        src={
          props.image_url !== "NA"
            ? props.image_url
            : "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-19.jpg"
        }
        alt="contato"
      />
      <p>{props.name}</p>
    </div>
  );

  const gridContactCity = (props) => (
    <div className="flex  justify-start gap-2">
      <GrLocation />
      <span>{props.city}</span>
    </div>
  );

  const contactsGrid = [
    {
      field: "name",
      headerText: "Nome",
      width: "230",
      template: gridContactProfile,
      textAlign: "Center",
    },
    { field: "_id", headerText: "", width: "0", textAlign: "Center" },
    {
      field: "profession",
      headerText: "Profissão",
      width: "250",
      textAlign: "Left",
    },
    {
      field: "city",
      headerText: "Cidade",
      width: "210",
      textAlign: "Left",
      template: gridContactCity,
    },
    {
      field: "state",
      headerText: "UF",
      width: "80",
      textAlign: "Left",
    },

    {
      field: "planting_culture",
      headerText: "Cultura",
      width: "160",
      format: "yMd",
      textAlign: "Center",
    },

    {
      field: "contact_type",
      headerText: "Tipo",
      width: "80",
      textAlign: "Center",
      visible: true,
    },
    {
      field: "intern_contact",
      visible: false,
    },
    {
      field: "phone",
      visible: false,
    },
    {
      field: "email",
      visible: false,
    },
    {
      field: "whatsapp",
      visible: false,
    },
    {
      field: "facebook",
      visible: false,
    },
    {
      field: "instagram",
      visible: false,
    },
    {
      field: "linkedin",
      visible: false,
    },
    {
      field: "site",
      visible: false,
    },
    {
      field: "specialties",
      visible: false,
    },
    {
      field: "business_segment",
      visible: false,
    },
  ];
  //o que estava externo em mock - fim

  let grid;

  const toolbar = ["ExcelExport"];
  const toolbarClick = (args) => {
    if (grid && args.item.id === "grid_excelexport") {
      const selectedRecords = grid.getSelectedRecords();

      const exportProperties = {
        dataSource: selectedRecords,
        includeHiddenColumn: true,
        enableFilter:true
      };
   
      grid.excelExport(exportProperties);
    }
  };
 


  const actionBegin = (args) => {
    console.log("REQUEST TYPE: ", args.requestType);
    if (args.requestType === "beginEdit") {
      console.log("SIM CANCELOU");
      args.cancel = true;
    }
  };

  const handleRowSelected = (selectedRows, e, clickedRow) => {
    console.log(selectedRows.data._id);
  };

  const handleRowSelected1 = (args) => {
    const selectedRowData = args.data;

    args.cancel = true;
    setState({ selectedRow: selectedRowData });

    // navigate(`/contact/${selectedRowData._id}`);
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white roudend-3xl">
      <Header category="Page" title="Contatos" />

      <GridComponent
        actionBegin={actionBegin}
        id="grid"
        ref={(g) => (grid = g)}
        locale="pt-BR"
        dataSource={contacts}
        allowPaging
        // allowSorting
        allowFiltering
        allowSelection
        filterSettings={{ ignoreAccent: true }}
        toolbar={toolbar}
        width="auto"
        selectedRowIndex={1}
        selectionSettings={{ type: "Multiple", mode: "Row" }}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
        rowSelected={handleRowSelected1}
        rowDeselected={() => setState({})}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="90"></ColumnDirective>
          {contactsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Sort, Filter, Toolbar, Selection, ExcelExport]}
        />
        {state.selectedRow && (
          <>
            <Detail contact={state.selectedRow} />
            {/* <Detail detalhes={state} /> */}
          </>
        )}
      </GridComponent>
      {/* {selectedRow && <h4>{selectedRow}</h4>} */}
    </div>
  );
};

export default Employees;
