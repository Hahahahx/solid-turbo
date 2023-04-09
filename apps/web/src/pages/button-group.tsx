import {
  Button, ButtonGroup,
} from 'ui'

export default function ButtonPage() {
  return <div>

    <div>

      <ButtonGroup>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
    </div>
    <div>

      <ButtonGroup outline>
        <Button color="gray">Profile</Button>
        <Button color="gray">Settings</Button>
        <Button color="gray">Messages</Button>
      </ButtonGroup>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="info">
      Profile
        </Button>
        <Button color="info">
      Settings
        </Button>
        <Button color="info">
      Messages
        </Button>
      </Button.Group>
      <Button.Group>
        <Button gradientMonochrome="info">
      Profile
        </Button>
        <Button gradientMonochrome="info">
      Settings
        </Button>
        <Button gradientMonochrome="info">
      Messages
        </Button>
      </Button.Group>
      <Button.Group>
        <Button gradientDuoTone="greenToBlue">
      Profile
        </Button>
        <Button gradientDuoTone="greenToBlue">
      Settings
        </Button>
        <Button gradientDuoTone="greenToBlue">
      Messages
        </Button>
      </Button.Group>
    </div>

    <div class="flex flex-wrap gap-2">
      <Button.Group outline={true}>
        <Button color="gray">

          <div i-ic-round-close/>
      Profile
        </Button>
        <Button color="gray">

          <div i-ic-round-close/>
      Settings
        </Button>
        <Button color="gray">
          <div i-ic-round-close/>
      Messages
        </Button>
      </Button.Group>
      <Button.Group outline={true}>
        <Button gradientMonochrome="info">
      Profile
        </Button>
        <Button gradientMonochrome="info">
      Settings
        </Button>
        <Button gradientMonochrome="info">
      Messages
        </Button>
      </Button.Group>
      <Button.Group outline={true}>
        <Button gradientDuoTone="cyanToBlue">
      Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
      Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
      Messages
        </Button>
      </Button.Group>
    </div>

  </div>
}
