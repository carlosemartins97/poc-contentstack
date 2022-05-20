import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class Config {
  api_key: string = environment.api_key
  delivery_token: string = environment.delivery_token
  environment: string = environment.environment
  region?: string;
}