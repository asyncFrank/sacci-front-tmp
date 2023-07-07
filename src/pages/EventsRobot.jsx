import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";

import { ordersData, contextMenuItems, ordersGrid,eventsGrid, eventsData } from "../data/mock";

const EventsRobot = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white roudend-3xl">
      <Header category="Página" title="Events" />
      <GridComponent id="gridcomp" dataSource={eventsData}>
        <ColumnsDirective>
          {eventsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
};

export default EventsRobot;
