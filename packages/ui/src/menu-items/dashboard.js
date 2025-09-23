// assets
import {
    IconBraces,
    IconUserBolt, 
    IconRobot,
    IconSparkles,
    IconDatabase,
    IconTool,
    IconKey,
    IconVariable,
    IconSettings
} from '@tabler/icons-react'

// constant
const icons = { 
    IconBraces,
    IconUserBolt, 
    IconRobot,
    IconSparkles,
    IconDatabase,
    IconTool,
    IconKey,
    IconVariable,
    IconSettings
}

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Workspace',
    type: 'group',
    children: [
        {
            id: 'workflows',
            title: 'AI Workflows',
            type: 'item',
            url: '/chatflows',
            icon: icons.IconBraces,
            breadcrumbs: false
        },
        {
            id: 'agents',
            title: 'AI Agents',  
            type: 'item',
            url: '/agentflows',
            icon: icons.IconUserBolt,
            breadcrumbs: false
        },
        {
            id: 'assistants',
            title: 'Smart Assistants',
            type: 'item',
            url: '/assistants',
            icon: icons.IconRobot,
            breadcrumbs: false
        },
        {
            id: 'marketplace',
            title: 'Template Gallery',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconSparkles,
            breadcrumbs: false
        }
    ]
}

export default dashboard
