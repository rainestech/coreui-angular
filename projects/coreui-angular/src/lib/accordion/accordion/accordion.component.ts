import { booleanAttribute, Component, computed, effect, inject, input } from '@angular/core';

import { AccordionService } from '../accordion.service';

@Component({
  selector: 'c-accordion',
  template: '<ng-content />',
  styleUrls: ['./accordion.component.scss'],
  exportAs: 'cAccordionItem',
  providers: [AccordionService],
  host: { '[class]': 'hostClasses()' }
})
export class AccordionComponent {
  readonly #accordionService = inject(AccordionService);

  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   * @type boolean
   */
  readonly flush = input(false, { transform: booleanAttribute });

  /**
   * Make accordion items stay open when another item is opened
   * @type boolean
   */
  readonly alwaysOpen = input(false, { transform: booleanAttribute });

  readonly #alwaysOpenEffect = effect(() => {
    this.#accordionService.alwaysOpen = this.alwaysOpen();
  });

  readonly hostClasses = computed(() => ({
    accordion: true,
    'accordion-flush': this.flush()
  }) as Record<string, boolean>);
}
