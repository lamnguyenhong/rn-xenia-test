import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.secondary
  },
  activeStyle: {
    color: theme.colors.primary
  }
}))