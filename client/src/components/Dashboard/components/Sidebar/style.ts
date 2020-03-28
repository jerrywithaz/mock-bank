import { makeStyles, Theme } from '@material-ui/core/styles';
import { SidebarProps } from './types';

export const useDashboardSidebarStyles = makeStyles<Theme, SidebarProps>(theme => ({
    drawer: {
        width: (props) => props.width,
        flexShrink: 0,
      },
      drawerPaper: {
        width: props => props.width,
      },
}));