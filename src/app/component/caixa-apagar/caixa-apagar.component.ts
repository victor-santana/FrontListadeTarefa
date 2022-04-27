import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ToDoListService } from '../to-do-list/to-do-list.service';




@Component({
  selector: 'app-caixa-apagar',
  templateUrl: './caixa-apagar.component.html',
  styleUrls: ['./caixa-apagar.component.scss']
})
export class CaixaApagarComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CaixaApagarComponent>
  ) { }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
