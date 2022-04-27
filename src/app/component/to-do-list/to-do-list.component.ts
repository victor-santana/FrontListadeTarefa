import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarefa } from 'src/app/models/tarefa.model';
import { CaixaEditarComponent } from '../caixa-editar/caixa-editar/caixa-editar.component';
import { ToDoListService } from './to-do-list.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  listaTarefa: Tarefa [] = [];
  listaTarefa_con: Tarefa [] = [];
  task: Tarefa = {
    id: 0,
    name: '',
    concluida: false,
    data: ''
  }

 changeColor: boolean = false;

  constructor(
    private service: ToDoListService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.service.ler().subscribe((task: Tarefa[]) => {
      this.listaTarefa = task;
    });

    this.service.lerConcluidas().subscribe((task: Tarefa[]) => {
      this.listaTarefa_con = task;
    });
  }

  marcar(id: Number) {

    this.service.desmarcarConcluida(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)
  }

  desmarcar(id: Number){

    console.log("teste");
    this.service.marcarConcluida(id).subscribe(
      (erro => {
        console.log(erro);
      })
    )
    setTimeout(() => {
      location.reload();

    }, 300)

  }

  //metodo para apagar
  apaga(id: number): void{
    console.table(id);
    this.service.apaga((id)).subscribe(() => {

      setTimeout(() => {
        location.reload();
      }, 50);
    });
  }

  // metodo para adicionar
  addTarefa(){
    this.service.novaTarefa(this.task).subscribe(s =>{
      setTimeout(() => {
        location.reload();
      }, 50);
    });
  }

  importante(id: number){

  }
}
