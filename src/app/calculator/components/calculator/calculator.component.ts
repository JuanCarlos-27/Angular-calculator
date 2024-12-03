import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { DICTIONARY_KEYS } from '@/calculator/utils';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)',
  },
})
export class CalculatorComponent {
  public readonly keyEquivalent = DICTIONARY_KEYS;
  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  private calculatorService = inject(CalculatorService);

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());

  public handleClick(key: string) {
    console.log({ key });
  }

  // @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    const equivalent = this.keyEquivalent[key] ?? key;

    this.handleClick(equivalent);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(equivalent);
    });
  }
}
