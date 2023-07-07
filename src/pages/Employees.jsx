import React from "react";
import { L10n } from "@syncfusion/ej2-base";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Sort,
  Selection,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";

import { employeesData, employeesGrid } from "../data/mock";

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
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white roudend-3xl">
      <Header category="Page" title="Contatos" />
      <GridComponent
        locale="pt-BR"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        selectionSettings={{ type: "Multiple", mode: "Row" }}
      >
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="90"></ColumnDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Sort, Toolbar, Selection]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
