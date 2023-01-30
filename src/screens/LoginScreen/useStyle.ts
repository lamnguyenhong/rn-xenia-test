import { MARGIN_HORIZONTAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  content: {
    width: '100%',
    paddingHorizontal: MARGIN_HORIZONTAL
  },
  buttonItem: {
    paddingVertical: MARGIN_HORIZONTAL / 2
  }
}))