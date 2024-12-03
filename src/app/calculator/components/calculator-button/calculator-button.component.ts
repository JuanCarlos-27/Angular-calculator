import { transformBoolean } from '@/calculator/utils';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
  },
})
export class CalculatorButtonComponent {
  public isCommand = input(false, { transform: transformBoolean });
  public isDoubleSize = input(false, { transform: transformBoolean });
  public onClick = output<string>();

  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isPressed = signal(false);

  public handleClick() {
    const content = this.contentValue()?.nativeElement?.textContent?.trim();
    if (!content) return;

    this.keyboardPressedStyle(content);
    this.onClick.emit(content);
  }

  public keyboardPressedStyle = (key: string) => {
    if (!this.contentValue()) return;

    const value = this.contentValue()?.nativeElement?.textContent?.trim();

    if (value !== key) return;

    this.isPressed.set(true);

    const timeref = setTimeout(() => {
      this.isPressed.set(false);
    }, 200);
  };

  public metodoHijo() {
    console.log('metodoHijo');
  }
}
