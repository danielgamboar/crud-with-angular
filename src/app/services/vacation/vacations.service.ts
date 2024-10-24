import { Injectable } from '@angular/core';
import { IVacation } from '../../model/types';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// significa que esto se crea cuando se inicia el proyecto, una unica vez
// referencia: Patron de dise;o singleton

export class VacationsService {

  constructor(private firestore: Firestore) { }

  private saveVacations(vacations: IVacation[]) {
    localStorage.setItem('vacations', JSON.stringify(vacations))
  }

  addVacation(newVacation: IVacation) {
    const vacationRef = collection(this.firestore, 'vacations');

    return addDoc(vacationRef, newVacation);
  }

  getVacationById (id: string): Observable<IVacation> {
   const vacationRef = doc(this.firestore, `vacations/${id}`);
   return docData(vacationRef, {idField: 'id'}) as Observable<IVacation>
  }

  getVacations(): Observable<IVacation[]> {
    const vacationRef = collection(this.firestore, 'vacations');

    return collectionData(vacationRef, {idField: 'id'}) as Observable<IVacation[]>
  }


  deleteVacation(vacation: IVacation){
    const vacationRef = doc(this.firestore, `vacances/${vacation.id}`);
    return deleteDoc(vacationRef);
  }

  updateVacanca(vacation: IVacation) {
    const vacationRef = doc(this.firestore, `vacances/${vacation.id}`);
    return updateDoc(vacationRef, { ...vacation });
  }
}
