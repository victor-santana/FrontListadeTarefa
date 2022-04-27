import { ToDoListService } from './../../to-do-list/to-do-list.service';
import { Tarefa } from 'src/app/models/tarefa.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-caixa-editar',
  templateUrl: './caixa-editar.component.html',
  styleUrls: ['./caixa-editar.component.scss']
})
export class CaixaEditarComponent implements OnInit {
  task: Tarefa = {
    id: 0,
    name: '',
    data: ''
  };

  constructor(
    private router: Router,
    private service: ToDoListService,
    private id: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.lerApartirId(String(takeId)).subscribe((task) => {
      this.task = task;
    });
  }

  atualizarTarefa(): void {
       this.service.autalizaTarefa(this.task).subscribe(() => {

    });
  }
  salvar(){
    setTimeout(() => {
      location.reload();
    }, 10);
    this.atualizarTarefa();
    this.cancel();

  }

  cancel(): void {
    this.router.navigate(["/"]);
  }


}
