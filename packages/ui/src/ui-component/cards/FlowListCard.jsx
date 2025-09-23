// material-ui
import { Card, CardContent, Typography, Box, Chip, IconButton, Menu, MenuItem, Avatar } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { useState } from 'react'

// icons
import { IconDotsVertical, IconPlay, IconPencil, IconTrash, IconCopy } from '@tabler/icons-react'

// utils
import { formatDistance } from 'date-fns'

// ===========================|| CUSTOM STYLED COMPONENTS ||=========================== //

const FlowCard = styled(Card)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.dark[900]} 100%)`,
    border: `1px solid ${theme.palette.primary.main}20`,
    borderRadius: '20px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'visible',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 40px -8px ${theme.palette.primary.main}40`,
        border: `1px solid ${theme.palette.primary.main}60`,
        '& .flow-overlay': {
            opacity: 1
        }
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary[200]})`,
        borderRadius: '20px 20px 0 0'
    }
}))

const FlowOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, transparent)`,
    borderRadius: '20px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none'
}))

const StatusBadge = styled(Chip)(({ theme, deployed }) => ({
    position: 'absolute',
    top: 16,
    right: 16,
    background: deployed 
        ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
        : theme.palette.dark.main,
    color: deployed ? '#000000' : theme.palette.text.secondary,
    fontSize: '0.75rem',
    fontWeight: 600,
    border: `1px solid ${deployed ? theme.palette.primary[200] : theme.palette.divider}`,
    '& .MuiChip-label': {
        padding: '4px 8px'
    }
}))

// ===========================|| FLOW LIST CARD ||=========================== //

const FlowListCard = ({ 
    chatflow, 
    onCardClick, 
    onDelete, 
    onDuplicate, 
    images 
}) => {
    const theme = useTheme()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenuClick = (event) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleAction = (action) => {
        handleMenuClose()
        if (action === 'delete') {
            onDelete(chatflow.id)
        } else if (action === 'duplicate') {
            onDuplicate(chatflow.id)
        }
    }

    const formatDate = (dateString) => {
        try {
            return formatDistance(new Date(dateString), new Date(), { addSuffix: true })
        } catch {
            return 'Unknown'
        }
    }

    return (
        <FlowCard onClick={() => onCardClick(chatflow.id)}>
            <FlowOverlay className="flow-overlay" />
            
            <StatusBadge 
                deployed={chatflow.deployed}
                label={chatflow.deployed ? 'Live' : 'Draft'}
                size="small"
            />

            <CardContent sx={{ p: 3, pb: '24px !important' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Avatar
                        sx={{
                            width: 48,
                            height: 48,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary[200]})`,
                            color: '#000000',
                            fontSize: '1.25rem',
                            fontWeight: 700
                        }}
                    >
                        {chatflow.name?.charAt(0)?.toUpperCase() || 'F'}
                    </Avatar>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                mb: 0.5,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {chatflow.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '0.875rem',
                                lineHeight: 1.4
                            }}
                        >
                            Updated {formatDate(chatflow.updatedDate)}
                        </Typography>
                    </Box>

                    <IconButton
                        size="small"
                        onClick={handleMenuClick}
                        sx={{
                            color: theme.palette.text.secondary,
                            '&:hover': {
                                color: theme.palette.primary.main,
                                background: `${theme.palette.primary.main}20`
                            }
                        }}
                    >
                        <IconDotsVertical size={20} />
                    </IconButton>
                </Box>

                {chatflow.category && (
                    <Box sx={{ mt: 2 }}>
                        <Chip
                            label={chatflow.category}
                            size="small"
                            sx={{
                                background: theme.palette.dark.main,
                                color: theme.palette.text.secondary,
                                fontSize: '0.75rem'
                            }}
                        />
                    </Box>
                )}

                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    mt: 3,
                    pt: 2,
                    borderTop: `1px solid ${theme.palette.divider}`
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconPlay size={16} color={theme.palette.primary.main} />
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {chatflow.type || 'Workflow'}
                        </Typography>
                    </Box>
                    
                    <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
                        View Details →
                    </Typography>
                </Box>
            </CardContent>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        background: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: '12px',
                        mt: 1
                    }
                }}
            >
                <MenuItem onClick={() => handleAction('edit')}>
                    <IconPencil size={16} style={{ marginRight: 8 }} />
                    Edit
                </MenuItem>
                <MenuItem onClick={() => handleAction('duplicate')}>
                    <IconCopy size={16} style={{ marginRight: 8 }} />
                    Duplicate
                </MenuItem>
                <MenuItem onClick={() => handleAction('delete')} sx={{ color: theme.palette.error.main }}>
                    <IconTrash size={16} style={{ marginRight: 8 }} />
                    Delete
                </MenuItem>
            </Menu>
        </FlowCard>
    )
}

export default FlowListCard