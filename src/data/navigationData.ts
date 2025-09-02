const navigationData = [
    {
        key: "menu.list.home",
        url: "/",
        children: [],
    },
    {
        key: "menu.list.about",
        url: "/about",
        children: [],
    },
    {
        /// href
        /// caption
        key: "menu.list.pages",
        url: "/pages",
        children: [],
    },
    {
        key: "menu.list.dynamicRouting",
        url: "/dynamic-routing",
        children: [
            {
                key: "menu.list.subpage-1",
                url: "/dynamic-routing/subpage-1",
            },
            {
                key: "menu.list.subpage-2",
                url: "/dynamic-routing/subpage-2",
            },
        ],
    },
    {
        key: "menu.list.blog",
        url: "/blog",
        children: [],
    },
    {
        key: "menu.list.pagination",
        url: "/blog-pagination",
        children: [],
    },
    {
        key: "menu.list.contact",
        url: "/contact",
        children: [],
    },
];
export default navigationData;
