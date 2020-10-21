const getNavigation = (isLggedIn) => {

    if (!isLggedIn) {
        return [
            {
                title: 'Home',
                href: '/'
            },

            {
                title: 'Login',
                href: '/login'
            },

            {
                title: 'Register',
                href: '/register'
            }
        ];
    };

};

export default getNavigation;