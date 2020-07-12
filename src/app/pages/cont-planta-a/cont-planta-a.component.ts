import {
  Component,
  OnInit,
  ElementRef,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';





@Component({
  selector: "app-cont-planta-a",
  templateUrl: "./cont-planta-a.component.html",
  styleUrls: ["./cont-planta-a.component.css"]
})
export class ContPlantaAComponent {
 num = 1;
 respuesta = '';

  constructor(private _elementRef: ElementRef) {
   this.num = 1;
   this.respuesta = '';

  }

  title = 'Arrastra la opcion correcta';

  todos = [
    {
      id: '1',
      name: 'Manzanilla',
      category: 'jsdfnbjirv'
    },
    {
      id: '2',
      name: 'Epazote',
      category: 'jfdjdjjcjrcvu'
    },
    {
      id: '3',
      name: 'Ruda',
      category: 'hfdbcveqhbcvhe'
    },
    {
      id: '4',
      name: 'Savila',
      category: 'dijcdiijcjfd'
    }
  ];

  completed = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(this.completed, event.previousIndex, event.currentIndex);
    }
  }

  ngOnInit() {}

  updateGrid() {
    if(this.completed.length === 1){
      for (let i = 0; i <= this.completed.length; i++) {
        if (this.num >= 0) {
        if (this.completed[i]['id'] === '1') {
          prompt('Respuestas Correcta mi estimada ' + this.completed[i]['id'] );
        } else {
          prompt('uppps! Respuesta incorrecta');
          this.num--;
        }
      } else {
        prompt ('Upppps!');
      }
      }
    }
    console.log(this.completed);
  }



  valida() {
    if (this.completed.length === 1) {
      for (let i = 0; i <= this.completed.length; i++) {

        if (this.completed[i]['id'] === '1') {
          prompt('Respuestas Correcta mi estimada ' + this.completed[i]['id'] );

        } else {
             this.num--;
          prompt('Error mi estimada ' + this.num);
        }

      }
      console.log('contenedor 1 opcion');
    }

    if (this.completed.length === 0) {
        console.log('contenedor 0 opcion');
    }
    if (this.completed.length > 1) {
      console.log('No puedes poner mas de una opcion');


    }
  }

   ceheck(event: CdkDragDrop<string[]>){
    if(this.completed.length<=0){
      if (event.previousContainer !== event.container) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        moveItemInArray(this.completed, event.previousIndex, event.currentIndex);
      }
      console.log('Entro a metodo inserta');
     } else {
       this.updateGrid();
      console.log('Entro a metodo rechaza');
      }

    }

    entra(){
     console.log('Entro');
    }

  }

