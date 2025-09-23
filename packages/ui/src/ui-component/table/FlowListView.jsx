// material-ui
import { Box, Typography, Grid, Button, InputAdornment, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState, useEffect } from 'react'

// icons
import { IconSearch, IconPlus, IconFilter } from '@tabler/icons-react'

// project imports
import FlowListCard from '@/ui-component/cards/FlowListCard'
import MainCard from '@/ui-component/cards/MainCard'

// ===========================|| FLOW LIST VIEW ||=========================== //

const FlowListView = ({ 
    chatflows, 
    onCardClick, 
    onDelete, 
    onDuplicate, 
    onCreateNew,
    images = {},
    isLoading = false 
}) => {
    const theme = useTheme()
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredFlows, setFilteredFlows] = useState(chatflows || [])

    useEffect(() => {
        if (chatflows) {
            const filtered = chatflows.filter(flow =>
                flow.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                flow.category?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredFlows(filtered)
        }
    }, [chatflows, searchTerm])

    if (isLoading) {
        return (
            <Box sx={{ p: 3 }}>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                    Loading workflows...
                </Typography>
            </Box>
        )
    }

    return (
        <MainCard sx={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
            {/* Header Section */}
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mb: 4,
                flexWrap: 'wrap',
                gap: 2
            }}>
                <Box>
                    <Typography 
                        variant="h1" 
                        sx={{ 
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 1
                        }}
                    >
                        AI Workflows
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: theme.palette.text.secondary,
                            maxWidth: 600
                        }}
                    >
                        Build, deploy and manage your intelligent automation workflows
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<IconPlus />}
                    onClick={onCreateNew}
                    sx={{
                        borderRadius: '12px',
                        px: 3,
                        py: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        textTransform: 'none'
                    }}
                >
                    Create Workflow
                </Button>
            </Box>

            {/* Search and Filter Section */}
            <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mb: 4,
                alignItems: 'center'
            }}>
                <TextField
                    placeholder="Search workflows..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconSearch size={20} color={theme.palette.text.secondary} />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        flex: 1,
                        maxWidth: 400,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px'
                        }
                    }}
                />
                
                <Button
                    variant="outlined"
                    startIcon={<IconFilter />}
                    sx={{
                        borderRadius: '12px',
                        px: 3,
                        py: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        textTransform: 'none'
                    }}
                >
                    Filter
                </Button>
            </Box>

            {/* Flow Cards Grid */}
            {filteredFlows.length === 0 ? (
                <Box sx={{ 
                    textAlign: 'center', 
                    py: 8,
                    background: theme.palette.background.paper,
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.divider}`
                }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontFamily: "'Poppins', sans-serif"
                        }}
                    >
                        {searchTerm ? 'No workflows found' : 'No workflows yet'}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: theme.palette.text.secondary,
                            mb: 4,
                            maxWidth: 400,
                            mx: 'auto'
                        }}
                    >
                        {searchTerm 
                            ? 'Try adjusting your search terms or create a new workflow.'
                            : 'Get started by creating your first AI workflow to automate tasks and processes.'
                        }
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<IconPlus />}
                        onClick={onCreateNew}
                        sx={{
                            borderRadius: '12px',
                            px: 4,
                            py: 1.5,
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            textTransform: 'none'
                        }}
                    >
                        Create Your First Workflow
                    </Button>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {filteredFlows.map((chatflow) => (
                        <Grid item xs={12} sm={6} lg={4} xl={3} key={chatflow.id}>
                            <FlowListCard
                                chatflow={chatflow}
                                onCardClick={onCardClick}
                                onDelete={onDelete}
                                onDuplicate={onDuplicate}
                                images={images}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Stats Footer */}
            {filteredFlows.length > 0 && (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mt: 4,
                    pt: 3,
                    borderTop: `1px solid ${theme.palette.divider}`
                }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        {filteredFlows.length} workflow{filteredFlows.length !== 1 ? 's' : ''} 
                        {searchTerm && ' found'}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {filteredFlows.filter(f => f.deployed).length} Live
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                            {filteredFlows.filter(f => !f.deployed).length} Draft
                        </Typography>
                    </Box>
                </Box>
            )}
        </MainCard>
    )
}

export default FlowListView