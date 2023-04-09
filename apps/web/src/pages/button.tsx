import {
  Button, ButtonGroup,
} from 'ui'

export default function ButtonPage() {
  return <div>

    <div class="flex flex-wrap gap-2">
      <div>
        <Button>Default</Button>
      </div>
      <div>
        <Button color="gray">Gray</Button>
      </div>
      <div>
        <Button color="dark">Dark</Button>
      </div>
      <div>
        <Button color="light">Light</Button>
      </div>
      <div>
        <Button color="success">Success</Button>
      </div>
      <div>
        <Button color="failure">Failure</Button>
      </div>
      <div>
        <Button color="warning">Warning</Button>
      </div>
      <div>
        <Button color="purple">Purple</Button>
      </div>
    </div>
    <div class="flex flex-wrap gap-2">
      <div>
        <Button color="gray" pill>
              Gray
        </Button>
      </div>
      <div>
        <Button color="dark" pill>
              Dark
        </Button>
      </div>
      <div>
        <Button color="light" pill>
              Light
        </Button>
      </div>
      <div>
        <Button color="success" pill>
              Success
        </Button>
      </div>
      <div>
        <Button color="failure" pill>
              Failure
        </Button>
      </div>
      <div>
        <Button color="warning" pill>
              Warning
        </Button>
      </div>
      <div>
        <Button color="purple" pill>
              Purple
        </Button>
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <div>
        <Button gradientMonochrome="info">Info</Button>
      </div>
      <div>
        <Button gradientMonochrome="success">Success</Button>
      </div>
      <div>
        <Button gradientMonochrome="cyan">Cyan</Button>
      </div>
      <div>
        <Button gradientMonochrome="teal">Teal</Button>
      </div>
      <div>
        <Button gradientMonochrome="lime">Lime</Button>
      </div>
      <div>
        <Button gradientMonochrome="failure">Failure</Button>
      </div>
      <div>
        <Button gradientMonochrome="pink">Pink</Button>
      </div>
      <div>
        <Button gradientMonochrome="purple">Purple</Button>
      </div>
    </div>

    <div class="flex flex-wrap gap-2">
      <div>
        <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
      </div>
      <div>
        <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
      </div>
      <div>
        <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
      </div>
      <div>
        <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
      </div>
      <div>
        <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
      </div>
      <div>
        <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
      </div>
      <div>
        <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 items-center">
      <div>
        <Button size="xs">Extra small</Button>
      </div>
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div>
        <Button size="md">Base</Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button size="xl">Extra large</Button>
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <div>
        <Button>
          <div i-ic-round-close/>
              Buy now
        </Button>
      </div>
      <div>
        <Button>
              Choose plan
          <div i-ic-round-close/>
        </Button>
      </div>
    </div>

    <div class="w-3/12">
      <Button label="2">Messages</Button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <div>
        <Button>
          <div i-ic-round-close/>
        </Button>
      </div>
      <div>
        <Button pill>
          <div i-ic-round-close/>
        </Button>
      </div>
      <div>
        <Button outline>
          <div i-ic-round-close/>
        </Button>
      </div>
      <div>
        <Button outline pill size='xs'>
          <div i-ic-round-close/>
        </Button>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <div>
        <Button
          outline={true}
          gradientDuoTone="purpleToBlue"
        >
      Purple to Blue
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="cyanToBlue"
        >
      Cyan to Blue
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="greenToBlue"
        >
      Green to Blue
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="purpleToPink"
        >
      Purple to Pink
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="pinkToOrange"
        >
      Pink to Orange
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="tealToLime"
        >
      Teal to Lime
        </Button>
      </div>
      <div>
        <Button
          outline={true}
          gradientDuoTone="redToYellow"
        >
      Red to Yellow
        </Button>
      </div>
    </div>

    <Button
      loading
      outline={true}
      gradientDuoTone="redToYellow"
    >
      Red to Yellow
    </Button>
    <ButtonGroup>
      <Button color="gray">Profile</Button>
      <Button color="gray">Settings</Button>
      <Button color="gray">Messages</Button>
    </ButtonGroup>
  </div>
}
