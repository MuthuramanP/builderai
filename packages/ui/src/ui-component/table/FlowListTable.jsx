import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
    Box,
    Chip,
    Paper,
    Skeleton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
    Button,
    useTheme
} from '@mui/material'
import { ArrowUpward, ArrowDownward } from '@mui/icons-material'
import FlowListMenu from '../button/FlowListMenu'
import { Link } from 'react-router-dom'

const getLocalStorageKeyName = (name, isAgentCanvas) => {
    return (isAgentCanvas ? 'agentcanvas' : 'chatflowcanvas') + '_' + name
}

export const FlowListTable = ({ data, images, isLoading, filterFunction, updateFlowsApi, setError, isAgentCanvas }) => {
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const localStorageKeyOrder = getLocalStorageKeyName('order', isAgentCanvas)
    const localStorageKeyOrderBy = getLocalStorageKeyName('orderBy', isAgentCanvas)

    const [order, setOrder] = useState(localStorage.getItem(localStorageKeyOrder) || 'desc')
    const [orderBy, setOrderBy] = useState(localStorage.getItem(localStorageKeyOrderBy) || 'updatedDate')

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc'
        const newOrder = isAsc ? 'desc' : 'asc'
        setOrder(newOrder)
        setOrderBy(property)
        localStorage.setItem(localStorageKeyOrder, newOrder)
        localStorage.setItem(localStorageKeyOrderBy, property)
    }

    const sortedData = data
        ? [...data].sort((a, b) => {
              if (orderBy === 'name') {
                  return order === 'asc' ? (a.name || '').localeCompare(b.name || '') : (b.name || '').localeCompare(a.name || '')
              } else if (orderBy === 'updatedDate') {
                  return order === 'asc'
                      ? new Date(a.updatedDate) - new Date(b.updatedDate)
                      : new Date(b.updatedDate) - new Date(a.updatedDate)
              }
              return 0
          })
        : []

    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3
            }}
        >
            {/* Toolbar */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    backgroundColor: customization.isDarkMode
                        ? 'red'
                        : 'silver',
                    px: 2,
                    py: 1.5,
                    borderBottom: `1px solid ${theme.palette.divider}`
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '14px', color: '#000' }}>
                    Flow List
                </Typography>
                <Stack direction="row" color="#000" spacing={1}>
                    <Button
                        size="small"
                        sx={{color: '#000'}}
                        onClick={() => handleRequestSort('name')}
                        startIcon={
                            orderBy === 'name' ? (
                                order === 'asc' ? <ArrowUpward /> : <ArrowDownward />
                            ) : null
                        }
                    >
                        Sort by Name
                    </Button>
                    <Button
                        size="small"
                        sx={{color: '#000'}}
                        onClick={() => handleRequestSort('updatedDate')}
                        startIcon={
                            orderBy === 'updatedDate' ? (
                                order === 'asc' ? <ArrowUpward /> : <ArrowDownward />
                            ) : null
                        }
                    >
                        Sort by Date
                    </Button>
                </Stack>
            </Stack>

            <Table>
                <TableHead>
                    <TableRow sx={{ display: 'none' }}>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Nodes</TableCell>
                        <TableCell>Last Modified</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell colSpan={5}>
                                    <Skeleton variant="rectangular" height={60} />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        sortedData.filter(filterFunction).map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:hover': { backgroundColor: theme.palette.action.hover },
                                    borderBottom: `1px solid ${theme.palette.divider}`
                                }}
                            >
                                <TableCell colSpan={5} sx={{ py: 2 }}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        {/* Left side: Name, Categories, Date */}
                                        <Stack spacing={1}>
                                            <Tooltip title={row.templateName || row.name}>
                                                <Typography
                                                    component={Link}
                                                    to={`/${isAgentCanvas ? 'agentcanvas' : 'canvas'}/${row.id}`}
                                                    sx={{
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                        textDecoration: 'none',
                                                        color: theme.palette.primary.main,
                                                        maxWidth: 280,
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                >
                                                    {row.templateName || row.name}
                                                </Typography>
                                            </Tooltip>

                                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                                {row.category &&
                                                    row.category
                                                        .split(';')
                                                        .map((tag, idx) => (
                                                            <Chip
                                                                key={idx}
                                                                label={tag}
                                                                size="small"
                                                            />
                                                        ))}
                                            </Stack>

                                            <Typography variant="caption" color="textSecondary">
                                                Last Modified: {moment(row.updatedDate).format('MMMM Do, YYYY')}
                                            </Typography>
                                        </Stack>

                                        {/* Right side: nodes + actions in one line */}
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            {images[row.id] && (
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    {images[row.id]
                                                        .slice(0, 4)
                                                        .map((img) => (
                                                            <Box
                                                                key={img}
                                                                sx={{
                                                                    width: 32,
                                                                    height: 32,
                                                                    borderRadius: '50%',
                                                                    overflow: 'hidden',
                                                                    bgcolor: customization.isDarkMode
                                                                        ? theme.palette.grey[800]
                                                                        : theme.palette.grey[200]
                                                                }}
                                                            >
                                                                <img
                                                                    src={img}
                                                                    alt=""
                                                                    style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                            </Box>
                                                        ))}
                                                    {images[row.id].length > 4 && (
                                                        <Typography variant="caption">
                                                            +{images[row.id].length - 4}
                                                        </Typography>
                                                    )}
                                                </Stack>
                                            )}

                                            {/* Actions menu */}
                                            <FlowListMenu
                                                isAgentCanvas={isAgentCanvas}
                                                chatflow={row}
                                                setError={setError}
                                                updateFlowsApi={updateFlowsApi}
                                            />
                                        </Stack>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

FlowListTable.propTypes = {
    data: PropTypes.array,
    images: PropTypes.object,
    isLoading: PropTypes.bool,
    filterFunction: PropTypes.func,
    updateFlowsApi: PropTypes.object,
    setError: PropTypes.func,
    isAgentCanvas: PropTypes.bool
}
