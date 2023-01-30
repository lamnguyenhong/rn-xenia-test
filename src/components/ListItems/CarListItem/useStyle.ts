import { MARGIN_VERTICAL } from "@/constants/ui";
import { makeStyles } from "@rneui/themed";
import { RFValue } from "react-native-responsive-fontsize";

export const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: theme.colors.divider,
    borderBottomWidth: 1,
    paddingVertical: MARGIN_VERTICAL
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex: 3,
  },
  statusView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    width: 50,
    height: 50
  },
  modelStyle: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  plateStyle: {
    fontSize: RFValue(13),
    fontWeight: '300',
  },
  email: {
    fontSize: RFValue(12),
    fontWeight: '300',
    color: theme.colors.primary
  },
  status: {
    fontSize: RFValue(13),
    fontWeight: 'bold',
    color: theme.colors.primary
  },
}))