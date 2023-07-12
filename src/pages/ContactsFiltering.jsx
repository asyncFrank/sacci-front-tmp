import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { categoryData } from './data';
import "./sample.css";
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { PropertyPane } from '../common/property-pane';
function Filtering() {
    let gridInstance;
    let checkboxObj;
    const filData = [
        { id: '1', category: 'All' },
        { id: '2', category: 'Beverages' },
        { id: '3', category: 'Condiments' },
        { id: '4', category: 'Confections' },
        { id: '5', category: 'Dairy Products' },
        { id: '6', category: 'Grains/Cereals' },
        { id: '7', category: 'Meat/Poultry' },
        { id: '8', category: 'Produce' },
        { id: '9', category: 'Seafood' }
    ];
    const fields = { text: 'category', value: 'id' };
    function onChange(sel) {
        if (sel.itemData.category === 'All') {
            gridInstance.clearFiltering();
        }
        else {
            gridInstance.filterByColumn('CategoryName', 'equal', sel.itemData.category);
        }
    }
    function onChanged(args) {
        if (args.checked) {
            gridInstance.filterSettings.showFilterBarOperator = true;
        }
        else {
            gridInstance.filterSettings.showFilterBarOperator = false;
        }
    }
    return (<div className='control-pane'>
            <div className='col-lg-9 control-section'>
                <div style={{ padding: '14px 0' }}>
                    <div className="select-wrap">
                        <DropDownListComponent id="ddlelement" dataSource={filData} fields={fields} change={onChange.bind(this)} placeholder="Select category to filter" width="200px"/>
                    </div>
                </div>
                <GridComponent dataSource={categoryData} allowPaging={true} ref={grid => gridInstance = grid} pageSettings={{ pageSize: 10, pageCount: 5 }} allowFiltering={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='CategoryName' headerText='Category Name' width='150'></ColumnDirective>
                        <ColumnDirective field='ProductName' headerText='Product Name' width='150'></ColumnDirective>
                        <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='150' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='Discontinued' headerText='Discontinued' width='150' textAlign='Center' displayAsCheckBox={true} type='boolean'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Filter, Page]}/>
                </GridComponent>
            </div>

            <div className='col-lg-3 property-section'>
                <PropertyPane title='Properties'>
                    <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <td style={{ width: '70%' }}>
                                    <div>Enable Filterbar operator </div>
                                </td>
                                <td style={{ width: '30%', padding: '10px 10px 10px 0px' }}>
                                    <CheckBoxComponent ref={(scope) => { checkboxObj = scope; }} change={onChanged.bind(this)}></CheckBoxComponent>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </PropertyPane>
            </div>
        </div>);
}
export default Filtering;