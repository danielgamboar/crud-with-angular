import { Injectable } from '@angular/core';
import { HousingLocation} from './housing-location'

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url, {
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
     });
    return await data.json() as HousingLocation[] ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() as HousingLocation ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string, housingLocationId: number) {
    console.log(`Submitting application for ${firstName} ${lastName}, email: ${email}, housing location: ${housingLocationId}`);
  }
}
