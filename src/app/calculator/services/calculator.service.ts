import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  public resultText = signal('10');
  public subResultText = signal('0');
  public lastOperator = signal('+');
}
