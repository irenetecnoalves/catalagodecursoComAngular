
import { Injectable } from "@angular/core";
import { Curso } from "./curso";


@Injectable({
    providedIn:'root',
})
export class CursoServico{
    
    
    retrieveAll( ): Curso[]{
       
        return cursos;

    }

    
}

var cursos: Curso[] = [{

    id: 1,
    name: 'Angular: Forms',
    imageUrl: '/assets/image/forms.png',
    price: 99.99,
    code: 'XCP-8742',
    duration:120,
    description:'Neste curso o aluno desenvolverá o conhecimento e as habilidades para trabalhar dentro do ambiente',
    rating: 4,
    releaseDate: '08 / 06 / 2019',
},
{
    id: 2,
    name: 'Angular:Http',
    imageUrl: '/assets/image/http.png',
    price: 89.00,
    code: 'FDI-8752',
    duration:60,
    description:'Neste curso o aluno desenvolverá o conhecimento e as habilidades para trabalhar dentro do ambiente',
    rating: 5.6,
    releaseDate: '10 / 08/ 2020',
},
{
    id: 3,
    name: 'Angular: Router',
    imageUrl: '/assets/image/router.png',
    price: 125.00,
    code: 'HPT-5497',
    duration:360,
    description:'Neste curso o aluno desenvolverá o conhecimento e as habilidades para trabalhar dentro do ambiente',
    rating: 6.0,
    releaseDate: '04 /03 / 2020',
},
{


    id: 4,
    name: 'Angular: Cli',
    imageUrl: '/assets/image/cli.png',
    price: 78.95,
    code: 'PEO-4029',
    duration:36,
    description:'Neste curso o aluno desenvolverá o conhecimento e as habilidades para trabalhar dentro do ambiente',
    rating: 4.5,
    releaseDate: '11/ 09/ 2020',

},
{

    id: 5,
    name: 'Angular: Animations',
    imageUrl: '/assets/image/animations.png',
    price:69.65,
    code: 'GDE-64897',
    duration:120,
    description:'Neste curso o aluno desenvolverá o conhecimento e as habilidades para trabalhar dentro do ambiente',
    rating: 6.8,
    releaseDate: '02/04/ 2020',

}

];




