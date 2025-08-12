import { TabsConfig } from '../../core/models/tabs-config.model';
import {
  faCirclePlus,
  faCalendarDay,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

export const SideBarTabs: TabsConfig[] = [
  {
    url: '/functions/add-task',
    label: 'Add Task',
    icon: faCirclePlus,
  },
  {
    url: '/schedule/today',
    label: 'Today',
    icon: faCalendarDay,
  },
  {
    url: '/schedule/all',
    label: 'All',
    icon: faCalendarDays,
  },
];
