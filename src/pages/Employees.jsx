import { L10n } from "@syncfusion/ej2-base";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Page,
  Selection,
  Search,
  Filter,
  Sort,
  Toolbar,
  ExcelExport,
} from "@syncfusion/ej2-react-grids";
import React, { useEffect, useState } from "react";

import { Header } from "../components";

import axios from "axios";

import { GrLocation } from "react-icons/gr";

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
      nextPagerTooltip: "Gehen Sie zu den nächsten Pager-Elementen",
      previousPageTooltip: "Página anterior",
      previousPagerTooltip: "Gehen Sie zu vorherigen Pager-Elementen",
      totalItemsInfo: "({0} contatos)",
    },
  },
});

const Employees = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-deploy-sacci-1.onrender.com/api/contacts/all")
      .then((res) => setContacts(res.data))

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
    // { field: "name", headerText: "", width: "0", textAlign: "Center" },
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
    },
  ];
  //o que estava externo em mock - fim

  let grid;

  const toolbar = ["ExcelExport"];
  const toolbarClick = (args) => {
    console.log("Chamou o clic??");
    if (grid && args.item.id === "grid_excelexport") {
      console.log("entrou??");

      const selectedRecords = grid.getSelectedRecords();
      // const filteredRecords =
      const exportProperties = {
        dataSource: selectedRecords,
      };
      grid.excelExport(exportProperties);
    }
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white roudend-3xl">
      <Header category="Page" title="Contatos" />

      <GridComponent
        id="grid"
        ref={(g) => (grid = g)}
        locale="pt-BR"
        dataSource={contacts}
        allowPaging
        allowSorting
        allowFiltering
        filterSettings={{ ignoreAccent: true }}
        toolbar={toolbar}
        width="auto"
        selectionSettings={{ type: "Multiple", mode: "Row" }}
        allowExcelExport={true}
        toolbarClick={toolbarClick}
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
      </GridComponent>
    </div>
  );
};

export default Employees;
