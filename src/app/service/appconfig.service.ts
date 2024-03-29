import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppConfig } from '../bar/bar.component';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {
  config: AppConfig = {
    theme: 'lara-light-blue',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
};

private configUpdate = new Subject<AppConfig>();

configUpdate$ = this.configUpdate.asObservable();

updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
}

getConfig() {
    return this.config;
}
  constructor() { }
}
