import {Component, ElementRef, ViewChild} from "@angular/core";


@Component({
  selector: 'file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})

export class FileDropComponent {

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  selectClicked(){
    this.input.nativeElement.click();
  }

  fileInputChanged(){
    const files: FileList = this.input.nativeElement.files;
    if(!files.length){
      return
    }

  }

}
