// material-ui
import { styled } from '@mui/material/styles'

// project imports
import MainCard from './MainCard'

const NodeCardWrapper = styled(MainCard)(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.dark[900]} 100%)`,
    color: theme.palette.text.primary,
    border: '1px solid',
    borderColor: `${theme.palette.primary.main}40`,
    borderRadius: '20px',
    width: '320px',
    height: 'auto',
    padding: '16px',
    position: 'relative',
    overflow: 'visible',
    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
        borderColor: theme.palette.primary.main,
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 40px -8px rgba(16, 185, 129, 0.4), 0 0 0 2px ${theme.palette.primary.main}60`
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary[200]})`,
        borderRadius: '20px 20px 0 0'
    },
    '& .node-header': {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        color: theme.palette.text.primary,
        marginBottom: '12px'
    },
    '& .node-body': {
        color: theme.palette.text.secondary
    }
}))

export default NodeCardWrapper
