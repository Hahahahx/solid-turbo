import {
  Button, Checkbox, Label, TextInput,
} from 'ui'

export default function Input() {
  return <>
    <form class="flex flex-col gap-4">
      <div>
        <div class="mb-2 block">
          <Label
            for="email1"
            value="Your email"
          />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div class="mb-2 block">
          <Label
            for="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label for="remember">
      Remember me
        </Label>
      </div>
      <Button type="submit">
    Submit
      </Button>
    </form>

    <div class="flex flex-col gap-4">
      <div>
        <div class="mb-2 block">
          <Label
            for="small"
            value="Small input"
          />
        </div>
        <TextInput
          id="small"
          type="text"
          sizing="sm"
        />
      </div>
      <div>
        <div class="mb-2 block">
          <Label
            for="base"
            value="Base input"
          />
        </div>
        <TextInput
          id="base"
          type="text"
          sizing="md"
        />
      </div>
      <div>
        <div class="mb-2 block">
          <Label
            for="large"
            value="Large input"
          />
        </div>
        <TextInput
          id="large"
          type="text"
          sizing="lg"
        />
      </div>
    </div>
    <div>
      <div class="mb-2 block">
        <Label
          for="email3"
          value="Your email"
        />
      </div>
      <TextInput
        id="email3"
        type="email"
        placeholder="name@flowbite.com"
        required={true}
        helperText={<>We’ll never share your details. Read our<a href="/forms" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Privacy Policy</a>.</>}
      />
    </div>
    <div>
      <div class="mb-2 block">
        <Label
          for="email4"
          value="Your email"
        />
      </div>
      <TextInput
        id="email4"
        type="email"
        icon={<i i-ic-round-close/>}
        rightIcon={<i i-ic-round-close/>}
        placeholder="name@flowbite.com"
        required={true}
      />
    </div>
    <div>
      <div class="mb-2 block">
        <Label
          for="username"
          value="Username"
        />
      </div>
      <TextInput
        id="username3"
        placeholder="Bonnie Green"
        required={true}
        addon="@"
      />
    </div>
  </>
}
