import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CommonModule } from '@angular/common';
import { IVacation } from '../../model/types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VacationsService } from '../../services/vacation/vacations.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  title = 'Home';
  vacations: IVacation[] = []
  newVacationForm!: FormGroup;

  constructor(
    private router: Router,
    private vacationService: VacationsService
  ) {}

  ngOnInit(){
    this.createForm();
    this.loadVacations();
  }

  createForm() {
    this.newVacationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      country: new FormControl('', [Validators.required]),
      active: new FormControl(false, [Validators.required])
    })
  }

  goToAboutUs() {
    this.router.navigate(['about-us']);
  }

  loadVacations(){
    this.vacationService.getVacations().subscribe((vacations: IVacation[])=> {
      this.vacations = vacations
    })
  }

  addNewVacation() {
    if (!this.newVacationForm.valid) return alert("Invalid form!")

    const newVacation: IVacation = {
      name: this.newVacationForm.get('name')?.value,
      price: Number(this.newVacationForm.get('price')?.value),
      description: this.newVacationForm.get('description')?.value,
      country: this.newVacationForm.get('country')?.value,
      active: this.newVacationForm.get('active')?.value,
    }

    this.vacationService.addVacation(newVacation);
   this.loadVacations();
  }

  deleteVacation(id: string) {
  }

  editVacation(id: string) {
    const vacation = this.vacationService.getVacationById(id).subscribe((vacation: IVacation)=>{

    });
    console.log(vacation)
  }
}
