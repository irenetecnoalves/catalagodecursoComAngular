import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({

    templateUrl:'./info.component.html'
})


export class InfoComponent implements OnInit{

    cursoId!: number;
    constructor(private activatedRoute: ActivatedRoute){ }

    ngOnInit(): void{

        this.cursoId = + this.activatedRoute.snapshot.paramMap.get('cursoid')!;
    }

   

}