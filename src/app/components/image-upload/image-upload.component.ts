import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  @Output() imageSelected = new EventEmitter<string>();
  imageUrl: string | ArrayBuffer | null = null;
  defaultImageUrl = 'assets/s.jpg';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    // Define a imagem padrão quando o componente é inicializado
    this.imageUrl = this.defaultImageUrl;
  }

  onFileSelected(event: any): void {
    const file = event.target.files?.[0];
    if (file) {
      this.readImage(file);
    }
  }

  readImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target?.result as string;
      this.imageSelected.emit(this.imageUrl);
    };
    reader.readAsDataURL(file);
  }

  fileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

}
