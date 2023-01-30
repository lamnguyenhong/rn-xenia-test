import { makeStyles } from "@rneui/themed";

type ContainerOffset = {
  bottom?: number
  top?: number
}

export const useStyle = makeStyles((theme, {
  bottom,
  top
}: ContainerOffset) => ({
  container: {
    flex: 1,
    paddingTop: top,
    paddingBottom: bottom
  }
}))