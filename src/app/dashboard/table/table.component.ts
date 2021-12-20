import { Component, OnInit } from '@angular/core';
import{ TableHttpService} from "./table-http.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'explanation'];
  dataSource = [];
  constructor(private service: TableHttpService) { }
  ngOnInit(): void {
    this.service.getData().subscribe( res =>{
       console.log(res)
       this.dataSource = res.value;
    })
  }

}
