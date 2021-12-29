import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  URL = 'https://modelo-projeto-express-2.brunoggomes.repl.co';

  constructor(private http: HttpClient) {}

  obterEstudantes() {}
}
