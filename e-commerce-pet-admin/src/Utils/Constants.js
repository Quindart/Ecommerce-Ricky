export const APP_ROUTER = {
    INDEX: '/',
    //
    HOME: '/home',
    INVOICE: '/createinvoice',
    COMPONENT: '/component',
    USER_NOW_PROFILE: '/user/profile',

    USER: '/user',
    USER_LIST: '/user/list',
    USER_ADD: '/user/add',

    ORDER: '/order',
    ORDER_LIST: '/order/list',

    ATTRIBUTE: '/attribute',
    ADD_ATTRIBUTE: '/attribute/add',
    ATTRIBUTE_LIST: '/attribute/list',


    PRODUCT: '/product',
    PRODUCT_LIST: '/product/list',
    ADD_PRODUCT: '/product/add',

    CATEGORY: '/categorys',
    CATEGORY_LIST: '/categorys/list',
    CATEGORY_ADD: '/categorys/add',

    AUTH: 'auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    CHANGE_PASSWORD: 'change-password',
    REFRESH_TOKEN: '/auth/accessToken-generate',
}

export const ROLE = {
    USER: 'user',
    ADMIN: 'admin',
    OWNER: 'owner',
    WAREHOUSE: ' warehouse',
}
export const APP_ICON = {
    i_send: 'material-symbols:send',
    i_close: 'iconamoon:close',
    i_arrow_down: 'ph:arrow-down-light',
    i_arrow_up: 'ph:arrow-up-light',
    i_twitter: 'logos:twitter',
    i_google: 'flat-color-icons:google',
    i_menu: 'fe:app-menu',
    list: 'ph:list',
    
    product: 'fluent-mdl2:product',
    i_attribute: 'fluent-mdl2:product-release',
    order: 'carbon:order-details',
    list_user: 'ph:user-list',
    i_avatar: 'ooui:user-avatar',
    i_avatar_outline: 'ooui:user-avatar-outline',
    i_camera: 'mdi:camera',
    i_mail: 'material-symbols:mail',
    i_status: 'icon-park-solid:people',
    i_posts: 'mdi:post-it-notes',

    i_users: 'mdi:users',
    i_search: 'clarity:search-line',
    i_plus: 'ic:baseline-plus',
    i_contact_list: 'fluent-mdl2:contact-list',
    i_list: 'mi:list',

    i_grid: 'bxs:grid',

    i_dots: 'tabler:dots',

    i_right_arrow: 'oi:arrow-right',

    i_pen: 'la:pen',

    i_cake: 'mdi:cake',

    i_user: 'tdesign:user',

    i_company: 'mdi:company',

    i_phone: 'ic:round-phone',

    i_arrow_redo: 'ion:arrow-redo',

    i_flag: 'tabler:flag-filled',

    i_messenger: 'ri:messenger-fill',

    i_facebook: 'ri:facebook-fill',

    i_carrie_page: 'fa6-solid:s',

    i_mess_phone: 'el-phone-alt',
    i_device: 'tdesign:device',

    i_arrow_down_box_1: 'bxs-down-arrow',
    i_finger_print: 'teenyicons:fingerprint-outline',
    i_hand_bag: 'ph-handbag-fill',
    i_bell: 'fa6-solid:bell',
    i_trash: 'mdi-trash',
    i_trash_outline: 'mdi:trash-outline',

    i_lock: 'codicon:lock',
    i_gear: 'mdi:gear',
    i_upload: 'ic-round-cloud-upload',
    i_dollar: 'streamline:dollar-coin',
    i_mls: 'mdi-human-male-board',

    i_sales_1: 'bxs-badge-dollar',

    i_sales_2: 'fa6-solid-comments-dollar',

    i_hiring: 'mdi-human-greeting',
    i_paper: 'mdi:paper-outline',
    i_project_1: 'material-symbols-add-ad',

    i_project_2: 'fa-solid-project-diagram',

    i_crm: 'fluent-chat-bubbles-question-32-filled',
    i_diamond: 'ri:vip-diamond-line',
    i_sass: 'subway-book',
    i_chain: 'streamline:link-chain-solid',
    i_key: 'fontisto:key',
    i_profiles: 'icon-park-solid-people',

    i_account: 'ic-twotone-manage-accounts',

    i_user_contact: 'mdi-accounts-group',

    i_invoice: 'iconamoon-invoice-fill',

    i_ecommerce: 'teenyicons-basket-solid',

    i_admin_ecommerce: 'iconamoon-shopping-card-remove-fill',

    i_projects: 'file-icons-ionic-project',

    i_data_table: 'material-symbols-data-table-outline-rounded',

    i_todo_list: 'icons8-todo-list',

    i_eye_open: 'mdi:eye',

    i_eye_off: 'mdi:eye-off',

    i_instagram: 'ri:instagram-fill',
    i_instagram_outline: 'akar-icons:instagram-fill',

    i_warning: 'noto:warning',
}

export const TITLE_NAVBAR = {
    HOME: 'Dashboard',
    PRODUCT: 'Product Manager',
    ORDER: 'Order Manager',
    USER: 'User  Manager',
    COMPONENT: 'Component page',
}

export const NavItem = [
    {
        link: APP_ROUTER.HOME,
        icon: APP_ICON.i_company,
        title: TITLE_NAVBAR.HOME,
    },
    {
        link: APP_ROUTER.PRODUCT,
        icon: APP_ICON.product,
        title: TITLE_NAVBAR.PRODUCT,
    },
    {
        link: APP_ROUTER.ORDER,
        icon: APP_ICON.order,
        title: TITLE_NAVBAR.ORDER,
    },
    {
        link: APP_ROUTER.USER,
        icon: APP_ICON.list_user,
        title: TITLE_NAVBAR.USER,
    },
    {
        link: APP_ROUTER.COMPONENT,
        icon: APP_ICON.product,
        title: TITLE_NAVBAR.COMPONENT,
    },
]

export const COLOR = {
    indigo: '#405189',
    dark_indigo: '#364574',
    white: '#ffffff',
    gray: '#878a99',
    gray_light: '#f3f3f9',
    gray_dark: '#343a40',
    gray_100: '#f3f6f9',
    gray_200: '#eff2f7',
    gray_300: '#e9ebec',
    gray_400: '#ced4da',
    gray_500: '#adb5bd',
    gray_600: '#878a99',
    gray_700: '#495057',
    gray_800: '#343a40',
    gray_900: '#212529',
    black: '#000000',
    blue: '#3577f1',
    blue_200: '#299cdb',
    light_blue: '#2499EF',
    dark_blue: '#196BA7',
    blue_400: '#2385ba',
    light_sky: '#abb9e8',
    pink_900: '#ff316f',
}
