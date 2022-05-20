import { Injectable } from '@angular/core';
import * as contentstack from 'contentstack';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ContentStackService {
  Stack: any = {};
  stackConfig: any = {};

  constructor(private config: Config) {
    this.stackConfig = config;
    this.Stack = contentstack.Stack(this.stackConfig)
  }

  public stack() {
    return contentstack.Stack(this.stackConfig)
  }
}
