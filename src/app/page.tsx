import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
export default function Home() {
  return (
    <div>
      <form action={actions.singIn}>
        <Button type="submit"> Sign In!</Button>
      </form>

      <form action={actions.singOut}>
        <Button type="submit"> Sign Out!</Button>
      </form>
    </div>
  );
}
