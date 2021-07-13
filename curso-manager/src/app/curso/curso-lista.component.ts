import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
import { CursoServico } from "./curso.servico";


@Component({
    
    templateUrl:'./curso-lista.component.html'
})

export class CursoListaComponent implements OnInit{

    filteredCurso: Curso[]=[];

    _curso: Curso[]=[];

    _filterBy: string='';

   

    constructor(private cursoServico: CursoServico){}

    ngOnInit():void{
        this._curso = this.cursoServico.retrieveAll();
        this.filteredCurso = this._curso;
       
    }


    set filter(value:string){
        this._filterBy= value;

        this.filteredCurso= this._curso.filter(( cursos:Curso) => cursos.name.toLocaleLowerCase ( ) . indexOf ( this . _filterBy . toLocaleLowerCase ( ) )  >  - 1 ) ;
    }
   get filter(){
       return this._filterBy;
   }

    
    
}
