
export class FileModel {
  fileObject: File;




  sizeToMb(){
    return this.sizeToKb() / 1024;
  }
  sizeToKb(){
    return this.fileObject.size / 1042;
  }

}
