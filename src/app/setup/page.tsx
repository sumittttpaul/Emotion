import SetupScreenMain from 'components/ui/SetupUI/Setup.Screen.Main';
import SetupScreenTitle from 'components/ui/SetupUI/Setup.Screen.Title';
import SetupScreenContent from 'components/ui/SetupUI/Setup.Screen.Content';

async function Setup() {
  return (
    <SetupScreenMain MainClassName="h-full md:h-[652px]">
      <SetupScreenTitle />
      <SetupScreenContent
        AnimationDivClassName="h-[350px]"
        ContentClassName="h-[300px]"
        Animation={{
          Initial: { x: 50, opacity: 0 },
          Final: { x: 0, opacity: 1 },
          Transition: { type: 'tween' },
        }}
      />
    </SetupScreenMain>
  );
}

export default Setup;
