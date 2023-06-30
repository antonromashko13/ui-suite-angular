import { Component } from '@angular/core';
import {
  NodeType,
  DndModeConfig,
  DndModes,
} from '@apollon/ui-suite';
import { ITreeOptions, TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  /**
   * Flag of node updates status
   */
  nodesUpdated = false;

  /**
   * Drag&Drop config for ui-suite tree component
   */
  dndModeConfig: DndModeConfig = {
    default: DndModes.NONE,
    shift: DndModes.MOVE,
    ctrl: DndModes.COPY
  };

  /**
   * Hardcoded tree nodes wight child
   */
  singleTreeEg1: NodeType<string>[] = [
    {
      name: 'Root node 1',
      payload: 'abc',
      identity: '1',
      children: [
        {
          name: 'Node 2',
          payload: 'ghi',
          identity: '2',
          children: [
            {
              name: 'Child 1',
              payload: 'def',
              identity: '3',
            } as NodeType<string>,
            {
              name: 'Child 2',
              identity: '4',
            } as NodeType<string>,
            {
              name: 'Child 3',
              identity: '5',
            } as NodeType<string>
          ]
        } as NodeType<string>,
        {
          name: 'Node 3',
          identity: '6',
          children: [
            {
              name: 'Child 1',
              identity: '7'
            } as NodeType<string>,
            {
              name: 'Child 2',
              identity: '8',
            } as NodeType<string>,
            {
              name: 'Child 3',
              identity: '9',
            } as NodeType<string>
          ]
        } as NodeType<string>,
        {
          name: 'Node 4',
          identity: '10',
          children: [
            {
              name: 'Child 1',
              identity: '11',
            } as NodeType<string>,
            {
              name: 'Child 2',
              identity: '12',
            } as NodeType<string>,
            {
              name: 'Child 3',
              identity: '13',
            } as NodeType<string>
          ]
        } as NodeType<string>,
        {
          name: 'Node 5',
          identity: '14',
          children: [
            {
              name: 'Child 1',
              identity: '15'
            } as NodeType<string>,
            {
              name: 'Child 2',
              identity: '16',
            } as NodeType<string>,
            {
              name: 'Child 3',
              identity: '17',
            } as NodeType<string>
          ]
        } as NodeType<string>,
      ]
    } as NodeType<string>,
    {
      name: 'Node Root 2',
      identity: '18',
      children: [
        {
          name: 'Child2.1',
          identity: '19'
        } as NodeType<string>,
        {
          name: 'Child2.2',
          identity: '20',
          children: [
            {
              name: 'Subsub',
              identity: '21'
            } as NodeType<string>
          ]
        } as NodeType<string>
      ]
    } as NodeType<string>,
    {
      name: 'Node Root 3',
      identity: '22',
      payload: 'abc',
      children: [
        {
          name: 'Child3.1',
          identity: '23'
        } as NodeType<string>,
        {
          name: 'Child3.2',
          identity: '24',
          children: [
            {
              name: 'Subsub',
              identity: '25'
            } as NodeType<string>
          ]
        } as NodeType<string>
      ]
    } as NodeType<string>,
    {
      name: 'Node Root 4',
      identity: '26',
      payload: 'abc',
      children: [
        {
          name: 'Child4.1',
          identity: '27'
        }  as NodeType<string>,
        {
          name: 'Child4.2',
          identity: '28',
          children: [
            {
              name: 'Subsub',
              identity: '29'
            } as NodeType<string>
          ]
        } as NodeType<string>
      ]
    } as NodeType<string>
  ];

  /**
   * Options for tree
   */
  options: ITreeOptions = {
    idField: 'identity',
    useTriState: true,
    allowDrop: false,
    actionMapping: {
      mouse: {
        click: (tree: TreeModel, node: TreeNode, $event: any) => {
          if (!node.isActive) {
            node.toggleActivated();
            if (!node.isExpanded) {
              node.toggleExpanded();
              if (!node.isLeaf) {
                this.nodesUpdated = true;
              }
            }
          } else if (node.isActive && $event.ctrlKey) {
            node.toggleActivated();
            node.toggleExpanded();
            if (!node.isLeaf) {
              this.nodesUpdated = true;
            }
          }
        }
      }
    },
    allowDrag: (node) => true
  } as ITreeOptions;

  /**
   * Check for node reordering
   */
  checkReorderAvailability = () => true;

  /**
   * Reorder node handler
   */
  handleReorder(sourceItems: any[],
                targetNode: any,
                parentNode: any,
                insertIndex: number): void {
    /*NOTE: Example*/
    console.log(sourceItems);
    console.log(targetNode);
    console.log(parentNode);
    console.log(insertIndex);
    alert('items reordering!');
  }

  /**
   * Drop node handler
   */
  dropOnItemHandle(selectedItems: any[], target: any, dndMode: DndModes) {
    /*NOTE: Example*/
    if (dndMode === DndModes.MOVE) {
      alert('items moved!');
    } else if (dndMode === DndModes.COPY) {
      alert('items copy!');
    }
  }

  /**
   * Expand node handler
   */
  onToggleExpanded() {
    this.nodesUpdated = true;
  }
}
