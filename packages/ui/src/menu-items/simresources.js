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

// ==============================|| simresources MENU ITEMS ||============================== //

const simresources = {
    id: 'simresources',
    title: 'Sim Resources',
    type: 'group',
    children: [
        {
            id: 'document-stores',
            title: 'Knowledge Base',
            type: 'item',
            url: 'ai/workspace',
            icon: icons.IconDatabase,
            breadcrumbs: false
        },
        {
            id: 'tools',
            title: 'Custom Tools',
            type: 'item',
            url: 'ai/tools',
            icon: icons.IconTool,
            breadcrumbs: false
        },
        {
            id: 'apikey',
            title: 'API Keys',
            type: 'item',
            url: 'ai/apikey',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
}

export default simresources