interface IRoutes {
  main: {
    main: string;
    news: string;
    notices: string;
    friends: string;
    login: string;
    register: string;
  };
  user: { profile: string; addPet: string };
}

export const routes: IRoutes = {
  main: {
    main: '/',
    news: '/news',
    notices: '/notices',
    friends: '/friends',
    login: '/login',
    register: '/register',
  },
  user: {
    profile: '/profile',
    addPet: '/profile/add_pet',
  },
};
