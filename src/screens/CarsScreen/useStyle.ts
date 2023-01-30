import { MARGIN_HORIZONTAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  fabButtonStyle: {
    backgroundColor: theme.colors.primary,
    zIndex: 10
  },
  container: {
    backgroundColor: theme.colors.primary
  },
  tabViewItem: {
    backgroundColor: theme.colors.background,
    width: '100%'
  }
}))