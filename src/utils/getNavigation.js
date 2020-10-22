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
                    title: 'Car Fleet',
                    href: '/fleet'
                },

                {
                    title: 'Add Car',
                    href: '/'
                },

                {
                    title: 'Users',
                    href: '/'
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

            {
                title: 'Car Fleet',
                href: '/fleet'
            },
        ]

    }

};

export default getNavigation;