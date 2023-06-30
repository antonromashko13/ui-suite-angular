import { Component } from '@angular/core';
import {
  DndModeConfig,
  DndModes,
  IIcon,
  ImageCellValue,
  ColumnDataType,
  ColumnDataAlignment,
  ColumnDataPosition,
  DataTableColumn,
  DataTableUnitedColumn,
  ItemsReorderingResultModel
} from '@apollon/ui-suite';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  /**
   * Drag&Drop config for ui-suite table component
   */
  dndModeConfig: DndModeConfig = {
    default: DndModes.NONE,
    shift: DndModes.MOVE,
    ctrl: DndModes.COPY
  };

  /**
   * Table rows
   */
  rows = [
    {
      id: 1,
      name: '1 product',
      date: new Date(),
      selected: true,
      image: {icon: {icon: 'circle'} as IIcon, value: 2} as ImageCellValue,
      children: [
        {
          id: 11,
          name: '1 child',
          date: new Date(),
          selected: false,
          children: [
            {
              id: 111,
              name: '11 child',
              date: new Date(),
              selected: false,
              children: [
                {
                  id: 1111,
                  name: '111 child',
                  date: new Date(),
                  selected: false,
                },
              ]
            },
            {
              id: 112,
              name: '12 child',
              date: new Date(),
              selected: false,
            }
          ]
        },
        {
          id: 12,
          name: '2 child',
          date: new Date(),
          isHiddenCheckbox: true,
          selected: true
        },
        {
          id: 13,
          name: '3 child',
          date: new Date(),
          selected: false,
          disabled: true,
        }
      ]
    },
    {
      id: 2,
      name: '2 product',
      date: new Date(),
      selected: true,
      disabled: true,
      image: {icon: {icon: 'plus'} as IIcon, value: 3} as ImageCellValue,
    },
    {
      id: 3,
      name: '3 product',
      date: new Date(), selected: false,
      image: {icon: {icon: ''} as IIcon, value: 1} as ImageCellValue,
    },
    {
      id: 4,
      name: '4 product',
      date: new Date(),
      selected: true,
      disabled: true,
      image: {icon: {icon: 'minus'} as IIcon, value: 4} as ImageCellValue,
    },
    {
      id: 5,
      name: '5 product',
      date: new Date(),
      selected: false,
      image: {icon: {icon: ''} as IIcon, value: 1} as ImageCellValue,
    },
    {
      id: 6,
      name: '6 product',
      date: new Date(),
      selected: false
    },
    {
      id: 7,
      name: '7 product',
      date: new Date(),
      selected: true,
      image: {icon: {icon: 'circle'} as IIcon, value: 2} as ImageCellValue,
      children: [
        {
          id: 71,
          name: '1 article',
          date: new Date(),
          selected: false,
          children: [
            {
              id: 711,
              name: '1 variation',
              date: new Date(),
              selected: false,
            },
            {
              id: 712,
              name: '2 variation',
              date: new Date(),
              selected: false,
            }
          ]
        },
        {
          id: 72,
          name: '2 article',
          date: new Date(),
          selected: true
        },

      ]
    },
  ];

  /**
   * Table columns
   */
  columns = [
    {
      name: 'Name',
      prop: 'name',
      dataType: ColumnDataType.STRING,
      sortable: true,
      filterable: true,
      alignment: ColumnDataAlignment.LEFT,
      width: 50,
      editable: false,
      draggable: true,
      dataPosition: ColumnDataPosition.NEW_COLUMN,

      cellClass: 'name-cell',
      deleteColumnAllowed: true,
    } as DataTableColumn,
    {
      name: 'Image',
      prop: 'image',
      dataType: ColumnDataType.IMAGE,
      sortable: true,
      filterable: true,
      canAutoResize: false,
      draggable: true,
      possibleValues: [
        {value: 1, icon: {icon: ''} as IIcon},
        {value: 2, icon: {icon: 'circle'} as IIcon},
        {value: 3, icon: {icon: 'plus'} as IIcon},
        {value: 4, icon: {icon: 'minus'} as IIcon},
      ]
    },
    {
      name: 'preview',
      prop: 'upload.preview',
      dataType: ColumnDataType.IMAGE,
      sortable: true,
      filterable: true,
      canAutoResize: false,
      draggable: true,
      valueBuilder: {
        build: (item) => ({safeUrl: item.safeUrl} as ImageCellValue),
      }
    },
    {
      name: 'United column',
      prop: 'name',
      dataType: ColumnDataType.UNITED,
      sortable: true,
      filterable: true,
      canAutoResize: false,
      draggable: true,
      columns: [
        {
          name: 'Long Name',
          prop: 'name',
          dataType: ColumnDataType.STRING,
          sortable: true,
          filterable: true,
          alignment: ColumnDataAlignment.LEFT,
          draggable: true,
          dataPosition: ColumnDataPosition.NEW_LINE,
          cellClass: 'name-cell',
          headerOnNewLine: true,
        } as DataTableColumn,
        {
          name: 'Created',
          prop: 'date',
          dataType: ColumnDataType.DATE,
          sortable: true,
          filterable: true,
          alignment: ColumnDataAlignment.LEFT,
          draggable: true,
          dataPosition: ColumnDataPosition.NEW_LINE,
          headerOnNewLine: true,
        } as DataTableColumn
      ]
    } as DataTableUnitedColumn
  ];

  /**
   * Formly configuration for table
   */
  tableConfigFormlyModel = {
    columnMode: 'force',
    rowHeight: 50,
    editable: false,
    columns: this.columns,
    rows: JSON.stringify(this.rows, null, 2),
  };

  /**
   * Reordering event
   */
  rowsReordered = (rowsReorderingResultModel: ItemsReorderingResultModel) => {
    this.rows = rowsReorderingResultModel.reorderedItemsSnapshot;
  }
}
