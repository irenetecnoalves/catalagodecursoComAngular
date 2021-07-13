
import { templateJitUrl } from "@angular/compiler";
import { Component, Input, OnChanges } from "@angular/core";

@Component({

  selector:'app-estrela',
  templateUrl:'./estrela.component.html',
  styleUrls: ['./estrela.component.css']
})
  
export class EstrelaComponent implements OnChanges{

    @Input()
    rating: number=0;

    estrelawidth!: number;

    ngOnChanges(): void{
      this.estrelawidth = this.rating = 94/5;

    }



}
