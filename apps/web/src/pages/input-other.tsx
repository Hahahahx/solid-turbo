import { createSignal } from 'solid-js'
import {
  Checkbox, Label, Radio, ToggleSwitch,
} from 'ui'

export default function Input() {
  const [
    switch1, setSwitch1,
  ] = createSignal(false)
  const [
    switch2, setSwitch2,
  ] = createSignal(true)

  return <>
    <div
      class="flex flex-col gap-4"
      id="checkbox"
    >
      <div class="flex items-center gap-2">
        <Checkbox
          id="accept"
          checked={true}
        />
        <Label for="accept">
      I agree to the
          <a
            href="/forms"
            class="text-blue-600 dark:text-blue-500 hover:underline"
          >
        terms and conditions
          </a>
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="promotion" />
        <Label for="promotion">
      I want to get promotional offers
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="age" />
        <Label for="age">
      I am 18 years or older
        </Label>
      </div>
      <div class="flex gap-2">
        <div class="flex items-center h-5">
          <Checkbox id="shipping" />
        </div>
        <div class="flex flex-col">
          <Label for="shipping">
        Free shipping via Flowbite
          </Label>
          <div class="text-gray-500 dark:text-gray-300">
            <span class="text-xs font-normal">
          For orders shipped from Flowbite from{' '}
              <span class="font-medium">
            € 25
              </span>
              {' '}in books or
              <span>
            € 29
              </span>
              {' '}on other categories
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox
          id="disabled"
          disabled={true}
        />
        <Label
          for="disabled"
          disabled={true}
        >
      Eligible for international shipping (disabled)
        </Label>
      </div>
    </div>

    <fieldset
      class="flex flex-col gap-4"
      id="radio"
    >
      <legend>
    Choose your favorite country
      </legend>
      <div class="flex items-center gap-2">
        <Radio
          id="united-state"
          name="countries"
          value="USA"
          checked={true}
        />
        <Label for="united-state">
      United States
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Radio
          id="germany"
          name="countries"
          value="Germany"
        />
        <Label for="germany">
      Germany
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Radio
          id="spain"
          name="countries"
          value="Spain"
        />
        <Label for="spain">
      Spain
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Radio
          id="uk"
          name="countries"
          value="United Kingdom"
        />
        <Label for="uk">
      United Kingdom
        </Label>
      </div>
      <div class="flex items-center gap-2">
        <Radio
          id="china"
          name="countries"
          value="China"
          disabled={true}
        />
        <Label
          for="china"
          disabled={true}
        >
      China (disabled)
        </Label>
      </div>
    </fieldset>

    <div class="flex flex-col gap-4" id="toggle">
      <ToggleSwitch checked={switch1()} label="Toggle me" onChange={setSwitch1} />
      <ToggleSwitch checked={switch2()} label="Toggle me (checked)" onChange={setSwitch2} />
      <ToggleSwitch checked={false} disabled label="Toggle me (disabled)" onChange={() => undefined} />
      <ToggleSwitch checked={false} label="Toggle me (disabled)" onChange={() => undefined} />
    </div>
  </>
}
