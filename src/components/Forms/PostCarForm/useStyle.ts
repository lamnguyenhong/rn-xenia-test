import { MARGIN_HORIZONTAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";

export const useStyle = makeStyles((theme) => ({
  container: {
  },
  toggleRentView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  actionView: {
    paddingTop: MARGIN_HORIZONTAL * 4
  }
}))