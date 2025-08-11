import { RouteConfig } from '../../core/models/routes.model';

export const sideBarTabs: RouteConfig[] = [
  {
    path: '/functions/add-task',
    label: 'Add Task',
    icon: 'faCirclePlus',
  },
  {
    path: '/schedule/today',
    label: 'Today',
    icon: 'faCalendarDay',
  },
  {
    path: '/schedule/all',
    label: 'All',
    icon: 'faCalendarDays',
  },
];
