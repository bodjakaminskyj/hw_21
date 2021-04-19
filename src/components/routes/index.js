import Contacts from "../pages/contacts";
import { HomePage } from "../pages/home-page";
import { Photos } from "../pages/page-photos";
import { Publication } from "../pages/publication";

export const appRoutes = [
    {
        path: '/hw_21',
        exact: true,
        component: HomePage
    },
    {
        path: '/photos',
        component: Photos
    },
    {
        path: '/publication',
        component: Publication
    },
    {
        path: '/contacts',
        component: Contacts
    },
]


