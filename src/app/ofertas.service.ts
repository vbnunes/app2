import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api'
import { URL_API_USAR } from './app.api'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    constructor(private http: Http) { }
    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {

        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertasPorId(id: number): Promise<Oferta> {

        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json().shift()
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<String> {
        this.http.get(`${URL_API_USAR}`)
    }

}