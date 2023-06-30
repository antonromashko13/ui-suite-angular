import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  longHeaderName = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' +
    ' Voluptate obcaecati voluptates dolore rem officiis saepe alias assumenda ' +
    'hic architecto exercitationem. Maxime accusamus id similique exercitationem ab,';
}
