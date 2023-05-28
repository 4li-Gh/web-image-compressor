import {Component, EventEmitter, Output} from "@angular/core";
import {FileModel} from "../../models/file.model";


@Component({
  selector: 'image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})

export class ImageItemComponent {
  file: FileModel;

  @Output() closeClicked = new EventEmitter();




}
