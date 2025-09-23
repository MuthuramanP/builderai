// assets
import {
    IconDatabase,
    IconTool,
    IconKey,
    IconVariable,
    IconSettings
} from '@tabler/icons-react'

// constant
const icons = {
    IconDatabase,
    IconTool,
    IconKey,
    IconVariable,
    IconSettings
}

// ==============================|| RESOURCES MENU ITEMS ||============================== //

const resources = {
    id: 'resources',
    title: 'Tools & Data',
    type: 'group',
    children: [
        {
            id: 'document-stores',
            title: 'Knowledge Base',
            type: 'item',
            url: '/document-stores',
            icon: icons.IconDatabase,
            breadcrumbs: false
        },
        {
            id: 'tools',
            title: 'Custom Tools',
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: false
        },
        {
            id: 'apikey',
            title: 'API Keys',
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: false
        },
        {
            id: 'variables',
            title: 'Variables',
            type: 'item',
            url: '/variables',
            icon: icons.IconVariable,
            breadcrumbs: false
        },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
}

export default resources