const getNavigation = (isLggedIn , isAdmin) => {

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
    }else {

        if (isAdmin) {
            return [
                
                {
                    title: 'Home',
                    href: '/'
                },

                {
                    title: 'Add Car',
                    href: '/add'
                },

                {
                    title: 'Users',
                    href: '/users'
                },
            ]
        };

        return [
            {
                title: 'My Profile',
                href: '/profile'
            },

            {
                title: 'Home',
                href: '/'
            },

        ]

    }

};

export default getNavigation;