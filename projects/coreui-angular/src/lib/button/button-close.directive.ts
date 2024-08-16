import { booleanAttribute, computed, Directive, input, InputSignalWithTransform } from '@angular/core';
import { ThemeDirective } from '../shared/theme.directive';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[cButtonClose]',
  standalone: true,
  hostDirectives: [{ directive: ThemeDirective, inputs: ['dark'] }],
  host: { class: 'btn btn-close', '[class]': 'hostClasses()', '[attr.type]': 'type()' }
})
export class ButtonCloseDirective extends ButtonDirective {
  /**
   * Change the default color to white.
   * @type boolean
   * @deprecated 5.0.0. Use `cButtonClose.dark` instead.
   */
  white: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  override hostClasses = computed(() => {
    return {
      btn: true,
      'btn-close': true,
      'btn-close-white': this.white(),
      [`btn-${this.size()}`]: !!this.size(),
      disabled: this.disabled(),
      active: this.active()
    } as Record<string, boolean>;
  });
}
