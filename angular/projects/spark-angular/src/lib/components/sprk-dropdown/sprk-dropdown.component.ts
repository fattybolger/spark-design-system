import {
  Component,
  Input,
  Output,
  ElementRef,
  HostListener,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ISprkDropdownChoice } from './sprk-dropdown.interfaces';

// TODO: #3800 Remove `title` input, now replaced with `heading`
// TODO: #3800 Remove `additionalIconClasses` input, now replaced with `iconAdditionalClasses`
// TODO: #3800 Remove `dropdownType` input, now replaced with `variant`
// TODO: #3800 Remove `additionalTriggerTextClasses` input, now replaced with `triggerTextAdditionalClasses`
// TODO: #3800 Remove `triggerIconType` input, now replaced with `triggerIconName`
@Component({
  selector: 'sprk-dropdown',
  template: `
    <div>
      <a
        sprkLink
        variant="plain"
        [ngClass]="getTriggerClasses()"
        (click)="toggle($event)"
        [idString]="idString"
        [analyticsString]="analyticsString"
        aria-haspopup="listbox"
        href="#"
        [attr.aria-label]="
          triggerText ? triggerText : screenReaderText || 'Choose One'
        "
      >
        <span [ngClass]="getTriggerTextClasses()">{{ triggerText }}</span>
        <span class="sprk-u-ScreenReaderText">{{ screenReaderText }}</span>
        <sprk-icon
          [iconName]="triggerIconName || triggerIconType"
          additionalClasses="sprk-u-mls sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color {{
            iconAdditionalClasses || additionalIconClasses
          }}"
        ></sprk-icon>
      </a>

      <div [ngClass]="getClasses()" *ngIf="isOpen">
        <div
          class="sprk-c-Dropdown__header"
          *ngIf="heading || selector || title"
        >
          <h2
            sprkText
            variant="bodyTwo"
            class="sprk-c-Dropdown__title"
            *ngIf="title || heading"
          >
            {{ heading || title }}
          </h2>

          <a
            sprkLink
            *ngIf="selector && (!title || !heading)"
            variant="plain"
            class="sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
            (click)="toggle($event)"
            [attr.aria-label]="selector"
            href="#"
          >
            <span
              sprkStackItem
              sprkText
              variant="bodyTwo"
              class="sprk-c-Dropdown__title sprk-o-Stack__item--flex@xxs"
              >{{ selector }}</span
            >
            <sprk-icon
              sprkStackItem
              [iconName]="triggerIconName || triggerIconType"
              additionalClasses="
                sprk-c-Icon--filled-current-color
                sprk-c-Icon--stroke-current-color
                sprk-u-mls
                sprk-c-Icon--toggle
                {{ iconAdditionalClasses || additionalIconClasses }}
              "
            ></sprk-icon>
          </a>
        </div>

        <ul
          class="sprk-c-Dropdown__links"
          role="listbox"
          [attr.aria-label]="
            heading || title
              ? heading || title
              : screenReaderText || 'My Choices'
          "
        >
          <li
            class="sprk-c-Dropdown__item"
            *ngFor="let choice of choices; let i = index"
            (click)="choiceClick(i)"
            [attr.aria-selected]="choice.active"
            role="option"
          >
            <div *ngIf="choice.content; then content; else link"></div>
            <ng-template #link>
              <a
                *ngIf="!choice.routerLink"
                sprkLink
                variant="unstyled"
                [attr.href]="choice.href"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.text"
                >{{ choice.text }}
              </a>
              <a
                *ngIf="choice.routerLink"
                sprkLink
                variant="unstyled"
                [routerLink]="choice.routerLink"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.text"
                >{{ choice.text }}
              </a>
            </ng-template>
            <ng-template #content>
              <a
                sprkLink
                *ngIf="!choice.routerLink"
                variant="unstyled"
                [attr.href]="choice.href"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.content.title"
              >
                <p sprkText variant="bodyOne">{{ choice.content.title }}</p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine1">
                  {{ choice.content.infoLine1 }}
                </p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine2">
                  {{ choice.content.infoLine2 }}
                </p>
              </a>
              <a
                sprkLink
                *ngIf="choice.routerLink"
                variant="unstyled"
                [routerLink]="choice.routerLink"
                [analyticsString]="choice.analyticsString"
                [ngClass]="{
                  'sprk-c-Dropdown__link': true,
                  'sprk-c-Dropdown__link--active': choice.active
                }"
                [attr.aria-label]="choice.content.title"
              >
                <p sprkText variant="bodyOne">{{ choice.content.title }}</p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine1">
                  {{ choice.content.infoLine1 }}
                </p>
                <p sprkText variant="bodyTwo" *ngIf="choice.content.infoLine2">
                  {{ choice.content.infoLine2 }}
                </p>
              </a>
            </ng-template>
          </li>
        </ul>
        <ng-content select="[sprkDropdownFooter]"></ng-content>
      </div>
    </div>
  `,
})
export class SprkDropdownComponent implements OnChanges {
  /**
   * Determines the type of Dropdown to render.
   */
  @Input()
  variant: string;
  // TODO: #3800 Remove `dropdownType` input, now replaced with `variant`
  /**
   * Deprecated. Use the `variant` input instead.
   * Determines the type of Dropdown to render.
   */
  @Input()
  dropdownType;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * dropdown list.
   */
  @Input()
  additionalClasses: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * icon.
   */
  @Input()
  iconAdditionalClasses: string;
  // TODO: #3800 Remove `additionalIconClasses` input, now replaced with `iconAdditionalClasses`
  /**
   * Deprecated. Use `iconAdditionalClasses` instead.
   * Expects a space separated string
   * of classes to be added to the
   * icon.
   */
  @Input()
  additionalIconClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the trigger link element.
   */
  @Input()
  triggerAdditionalClasses: string;
  // TODO: #3800 Remove `additionalTriggerClasses` input, now replaced with `triggerAdditionalClasses`
  /**
   * Deprecated. Use `triggerAdditionalClasses` instead.
   * Expects a space separated string of
   * classes to be added to the trigger link element.
   */
  @Input()
  additionalTriggerClasses: string;
  /**
   * Expects a space separated string of
   * classes to be added to the trigger text.
   */
  @Input()
  triggerTextAdditionalClasses: string;
  // TODO: #3800 Remove `additionalTriggerTextClasses` input, now replaced with `triggerTextAdditionalClasses`
  /**
   * Deprecated. Use `triggerTextAdditionalClasses` instead.
   * Expects a space separated string of
   * classes to be added to the trigger text.
   */
  @Input()
  additionalTriggerTextClasses: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * If `true`, the Dropdown will be open when rendered.
   */
  @Input()
  isOpen = false;
  // TODO: #3800 Remove `title` input, now replaced with `heading`
  /**
   * Deprecated. Use the `heading` input instead.
   * The heading text displayed
   * in the box above the choices.
   */
  @Input()
  title: string;
  /**
   * The heading text displayed
   * in the box above the choices.
   */
  @Input()
  heading: string;
  /**
   * The value supplied will be assigned to
   * the title text when its open.
   */
  @Input()
  selector: string;
  /**
   * Expects an array of
   * [ISprkDropdownChoice](https://github.com/sparkdesignsystem/spark-design-system/blob/main/angular/projects/spark-angular/src/lib/components/sprk-dropdown/sprk-dropdown.interfaces.ts)
   *  objects.
   */
  @Input()
  choices: ISprkDropdownChoice[];
  /**
   * If supplied, will render the icon
   * to the right of the trigger text.
   */
  @Input()
  triggerIconName: string;
  // TODO: #3800 Remove `triggerIconType` input, now replaced with `triggerIconName`
  /**
   * Deprecated. Use `triggerIconName` instead.
   * If supplied, will render the icon
   * to the right of the trigger text.
   */
  @Input()
  triggerIconType: string;
  /**
   * The text that is initially rendered to the trigger.
   * If `variant` is `informational`,
   * clicking on a choice will change the trigger text.
   */
  @Input()
  triggerText: string;
  /**
   * The value supplied will be visually hidden
   * inside the trigger. Useful
   * for when title is empty,
   * and only `triggerIconName` is supplied.
   */
  @Input()
  screenReaderText: string;
  /**
   * The event that is
   * emitted from the Dropdown when a choice
   * is clicked. The event contains the value
   * of the choice that was clicked.
   */
  @Output()
  choiceMade: EventEmitter<string> = new EventEmitter();

  /**
   * This event will be emitted
   * when the Dropdown is opened.
   */
  @Output()
  openedEvent: EventEmitter<any> = new EventEmitter();
  /**
   * This event will be emitted
   * when the Dropdown is closed.
   */
  @Output()
  closedEvent: EventEmitter<any> = new EventEmitter();

  /**
   * @ignore
   */
  constructor(public ref: ElementRef) {}

  /**
   * @ignore
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.choices) {
      // TODO: #3800 Remove `dropdownType` input, now replaced with `variant`
      if (
        this.variant === 'informational' ||
        this.dropdownType === 'informational'
      ) {
        this._updateTriggerTextWithDefaultValue();
      }
    }
  }

  /**
   * @ignore
   */
  toggle(event): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.openedEvent.emit();
    } else {
      this.closedEvent.emit();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event): void {
    if (!this.ref.nativeElement.contains(event.target)) {
      this.hideDropdown();
    }
  }

  @HostListener('document:focusin', ['$event'])
  onFocusin(event): void {
    /* istanbul ignore else: angular focus event isnt setting e.target */
    if (!this.ref.nativeElement.contains(event.target)) {
      this.hideDropdown();
    }
  }
  /**
   * @ignore
   */
  choiceClick(i) {
    this.clearActiveChoices();
    const clickedChoice = this.choices[i];
    // TODO: #3800 Remove `dropdownType` input, now replaced with `variant`
    if (
      this.variant === 'informational' ||
      this.dropdownType === 'informational'
    ) {
      this.setActiveChoice(i);
      this.updateTriggerText(i);
    }
    this.hideDropdown();
    this.choiceMade.emit(clickedChoice['value']);
  }
  /**
   * @ignore
   */
  setActiveChoice(i): void {
    this.choices[i]['active'] = true;
  }
  /**
   * @ignore
   */
  updateTriggerText(i): void {
    this.triggerText = this.choices[i]['value'];
  }

  /**
   * @ignore
   */
  clearActiveChoices(): void {
    this.choices.forEach((choice: ISprkDropdownChoice) => {
      choice['active'] = false;
    });
  }

  /**
   * @ignore
   */
  hideDropdown(): void {
    this.isOpen = false;
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-c-Dropdown'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTriggerClasses(): string {
    const classArray: string[] = ['sprk-c-Dropdown__trigger'];

    if (this.additionalTriggerClasses || this.triggerAdditionalClasses) {
      // TODO: #3800 Remove `additionalTriggerClasses` input, now replaced with `triggerAdditionalClasses`
      const classes =
        this.triggerAdditionalClasses || this.additionalTriggerClasses;
      classes.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * @ignore
   */
  getTriggerTextClasses(): string {
    const classArray: string[] = [''];

    // TODO: #3800 Remove `additionalTriggerTextClasses` input, now replaced with `triggerTextAdditionalClasses`
    if (
      this.triggerTextAdditionalClasses ||
      this.additionalTriggerTextClasses
    ) {
      const classes =
        this.triggerTextAdditionalClasses || this.additionalTriggerTextClasses;
      classes.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  /**
   * Update trigger text with default choice value
   */
  protected _updateTriggerTextWithDefaultValue(): void {
    const defaultChoice = this._lookupDefaultChoice();

    if (defaultChoice) {
      // Deactivate previously activated choices
      this.clearActiveChoices();
      // Mark default choice as active
      defaultChoice.active = true;
      // Update trigger text
      this.triggerText = defaultChoice.value;
    }
  }

  /**
   * Lookup choice with specified `isDefault: true` field
   */
  protected _lookupDefaultChoice(): ISprkDropdownChoice | null {
    return this.choices.find((choice) => choice.isDefault) || null;
  }
}
