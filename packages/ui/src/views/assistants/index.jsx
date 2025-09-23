import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { Card, CardContent, Stack, Typography, Box } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'

// icons
import { IconRobotFace, IconBrandOpenai, IconBrandAzure } from '@tabler/icons-react'

const cards = [
    {
        title: 'Custom Assistant',
        description: 'Create custom assistant using your choice of LLMs',
        icon: <IconRobotFace />,
        iconText: 'Custom',
        gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
    },
    {
        title: 'OpenAI Assistant',
        description: 'Create assistant using OpenAI Assistant API',
        icon: <IconBrandOpenai />,
        iconText: 'OpenAI',
        gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
    },
    {
        title: 'Azure Assistant (Coming Soon)',
        description: 'Create assistant using Azure Assistant API',
        icon: <IconBrandAzure />,
        iconText: 'Azure',
        gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'
    }
]

// Glassmorphism style
const StyledCard = styled(Card)(({ theme }) => ({
    height: '320px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: `1px solid rgba(255, 255, 255, 0.2)`,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
    }
}))

const FeatureIcon = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.15)',
    marginBottom: theme.spacing(2),
    '& svg': {
        width: '32px',
        height: '32px',
        color: '#fff'
    }
}))

const FeatureCards = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const onCardClick = (index) => {
        if (index === 0) navigate('/assistants/custom')
        if (index === 1) navigate('/assistants/openai')
        if (index === 2) alert('Under Development')
    }

    return (
        <Stack
            spacing={3}
            direction='row'
            sx={{
                width: '100%',
                justifyContent: 'space-between'
            }}
        >
            {cards.map((card, index) => (
                <StyledCard
                    key={index}
                    onClick={() => index !== 2 && onCardClick(index)}
                    sx={{
                        flex: 1,
                        maxWidth: 'calc((100% - 32px) / 3)',
                        opacity: index === 2 ? 0.6 : 1,
                        cursor: index === 2 ? 'not-allowed' : 'pointer'
                    }}
                >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                        <FeatureIcon>{card.icon}</FeatureIcon>
                        <Typography variant='h5' fontWeight={700} gutterBottom>
                            {card.title}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            {card.description}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box
                            sx={{
                                mt: 2,
                                px: 3,
                                py: 1,
                                borderRadius: 2,
                                background: 'rgba(255,255,255,0.1)',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            }}
                        >
                            {card.iconText}
                        </Box>
                    </CardContent>
                </StyledCard>
            ))}
        </Stack>
    )
}

// ==============================|| ASSISTANTS ||============================== //

const Assistants = () => {
    return (
        <MainCard>
            <Stack flexDirection='column' sx={{ gap: 3 }}>
                <ViewHeader title='Assistants' />
                <div data-tour="assistant-types">
                    <FeatureCards />
                </div>
            </Stack>
        </MainCard>
    )
}

export default Assistants
