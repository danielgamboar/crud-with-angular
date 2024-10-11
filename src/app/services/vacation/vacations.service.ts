import { Injectable } from '@angular/core';
import { IVacation } from '../../model/types';

@Injectable({
  providedIn: 'root'
})
// significa que esto se crea cuando se inicia el proyecto, una unica vez
// referencia: Patron de dise;o singleton

export class VacationsService {

  constructor() { }

  private saveVacations(vacations: IVacation[]) {
    localStorage.setItem('vacations', JSON.stringify(vacations))
  }

  getVacations(): IVacation[] {
    const vacations = localStorage.getItem('vacations');
    return vacations ?  JSON.parse(vacations) as IVacation[] : [];
  }

  addVacation(newVacation: IVacation): boolean {
    const vacations = this.getVacations(); // []

    vacations.push(newVacation);

    this.saveVacations(vacations);

    return true
  }

  deleteVacation(index: number): IVacation[] {
    let auxVacations = this.getVacations();
    auxVacations.splice(index, 1);
    this.saveVacations(auxVacations);
    return this.getVacations();
  }

  getVacationByIndex(index: number): IVacation {
    const vacationsList = this.getVacations();

    return vacationsList[index];
  }

  getVacationById (id: number): IVacation | undefined {
    const vacations = this.getVacations()

    const vacation = vacations.find(vacation => vacation.id === id)

    return vacation

  }
}
