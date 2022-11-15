interface BaseRoutesProps {
  home: {
    route: string,
  },
  dashboard: {
    route: string,
  },
}

export const BaseRoutes:BaseRoutesProps = {
  home: {
    route: '/',
  },
  dashboard: {
    route: '/dashboard',
  },
}