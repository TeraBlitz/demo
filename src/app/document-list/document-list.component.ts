import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import js from "../../assets/db.json";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  data;
  @Input() value;
  constructor() { }
  ngOnInit() {
    console.log(js.documents)
    console.log(this.data)
    let display=[];
    js.documents.forEach(d => {
      if(d.status.name==this.value){
        display.push(d);
      }
      display
    });
    if(this.value!="todos"){
      this.data=display;
    }
    else{
      this.data=js.documents
    }
 
  }
  displayedColumns = ["documento", "autor", "firmante","creado","creado2","click"];

}
