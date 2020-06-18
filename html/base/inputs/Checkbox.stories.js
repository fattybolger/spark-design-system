import { useEffect } from '@storybook/client-api';
import { checkbox } from './checkbox';
import { markdownDocumentationLinkBuilder } from '../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
    `,
    docs: { iframeHeight: 140 },
  },
};

export const defaultStory = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['checkbox'],
  },
};

export const defaultHelperText = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>
      <div class="sprk-b-HelperText">
        Optional helper text, used to clarify the field&#x27;s intent.
      </div>
      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

defaultHelperText.story = {
  name: 'Default Helper Text',
  parameters: {
    jest: ['checkbox'],
  },
};

export const invalidCheckbox = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
        <svg
          class="sprk-c-Icon sprk-c-Icon--m sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled-small" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;
};

invalidCheckbox.story = {
  name: 'Invalid',
  parameters: {
    jest: ['checkbox'],
  },
};

export const disabledCheckbox = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label sprk-b-Label--disabled">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-1"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled
              sprk-b-Checkbox__label
            "
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-2"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled
              sprk-b-Checkbox__label
            "
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="sprk-b-SelectionContainer sprk-b-Checkbox"
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-3"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled
              sprk-b-Checkbox__label
            "
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

disabledCheckbox.story = {
  name: 'Disabled',
  parameters: {
    jest: ['checkbox'],
  },
};

export const huge = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >
          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >
          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>
        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>
      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

huge.story = {
  name: 'Huge',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeInvalid = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-1"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-2"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
          >

          <label
            for="checkbox-3"
            class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
        <svg
          class="sprk-c-Icon sprk-c-Icon--m sprk-b-ErrorIcon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#exclamation-filled-small" />
        </svg>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </div>
    </div>
  `;
};

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeDisabled = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label sprk-b-Label--disabled">
            Checkbox Group Label
          </label>
        </legend>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-1"
            data-id="checkbox-1"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-1"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Checkbox__label
            "
          >
            Checkbox Item 1
          </label>
        </div>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-2"
            data-id="checkbox-2"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-2"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Checkbox__label
            "
          >
            Checkbox Item 2
          </label>
        </div>

        <div
          class="
            sprk-b-SelectionContainer
            sprk-b-Checkbox
            sprk-b-Checkbox--huge
          "
          data-sprk-input="checkbox"
        >
          <input
            class="sprk-b-Checkbox__input"
            id="checkbox-3"
            data-id="checkbox-3"
            type="checkbox"
            aria-describedby="checkbox--error-container"
            disabled
          >

          <label
            for="checkbox-3"
            class="
              sprk-b-Label
              sprk-b-Label--inline
              sprk-b-Label--disabled sprk-b-Checkbox__label
            "
          >
            Checkbox Item 3
          </label>
        </div>
      </fieldset>

      <div
        class="sprk-b-ErrorContainer"
        id="checkbox--error-container"
      >
      </div>
    </div>
  `;
};

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeLayoutTwo = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Huge Checkbox Group Label
          </label>
        </legend>
        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-1"
                data-id="checkbox-1"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-1"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 1
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
              >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-2"
                data-id="checkbox-2"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-2"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 2
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    <div
      class="sprk-b-ErrorContainer"
      id="checkbox--error-container"
    >
    </div>
  </div>
  `;
};

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeLayoutFour = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Huge Checkbox Group Label
          </label>
        </legend>
        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-1"
                data-id="checkbox-1"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-1"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 1
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-2"
                data-id="checkbox-2"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-2"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 2
              </label>
            </div>
          </div>
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer sprk-b-Checkbox sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-3"
                data-id="checkbox-3"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-3"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 3
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-4"
                data-id="checkbox-4"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 4
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    <div
      class="sprk-b-ErrorContainer"
      id="checkbox--error-container"
    >
    </div>
  </div>
  `;
};

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeLayoutFive = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Huge Checkbox Group Label
          </label>
        </legend>
        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-1"
                data-id="checkbox-1"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-1"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 1
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-2"
                data-id="checkbox-2"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-2"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 2
              </label>
            </div>
          </div>
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-3"
                data-id="checkbox-3"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-3"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 3
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-4"
                data-id="checkbox-4"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 4
              </label>
            </div>
          </div>
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--center-row sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-o-Stack__item--half@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-5"
                data-id="checkbox-5"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-5"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 5
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    <div
      class="sprk-b-ErrorContainer"
      id="checkbox--error-container"
    >
    </div>
  </div>
  `;
};

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: ['checkbox'],
  },
};

export const hugeLayoutSix = () => {
  useEffect(() => {
    checkbox();
  }, []);

  return `
    <div class="sprk-b-InputContainer sprk-b-InputContainer--huge">
      <fieldset class="sprk-b-Fieldset">
        <legend class="sprk-b-Legend">
          <label class="sprk-b-Label">
            Huge Checkbox Group Label
          </label>
        </legend>
        <div class="sprk-o-Stack sprk-o-Stack--medium">
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-1"
                data-id="checkbox-1"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-1"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 1
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-2"
                data-id="checkbox-2"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-2"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 2
              </label>
            </div>
          </div>
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
               "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-3"
                data-id="checkbox-3"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-3"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 3
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-4"
                data-id="checkbox-4"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-4"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 4
              </label>
            </div>
          </div>
          <div
            class="
              sprk-o-Stack__item
              sprk-o-Stack
              sprk-o-Stack--medium sprk-o-Stack--split@s
            "
          >
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-5"
                data-id="checkbox-5"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-5"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 5
              </label>
            </div>
            <div
              class="
                sprk-o-Stack__item
                sprk-o-Stack__item--flex@s
                sprk-b-SelectionContainer
                sprk-b-Checkbox
                sprk-b-Checkbox--huge
              "
              data-sprk-input="checkbox"
            >
              <input
                class="sprk-b-Checkbox__input"
                id="checkbox-6"
                data-id="checkbox-6"
                type="checkbox"
                aria-describedby="checkbox--error-container"
              >
              <label
                for="checkbox-6"
                class="sprk-b-Label sprk-b-Label--inline sprk-b-Checkbox__label"
              >
                Checkbox Item 6
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    <div
      class="sprk-b-ErrorContainer"
      id="checkbox--error-container"
    >
    </div>
  </div>
  `;
};

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
  parameters: {
    jest: ['checkbox'],
  },
};
