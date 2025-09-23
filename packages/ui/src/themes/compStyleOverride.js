
export default function componentStyleOverrides(theme) {
    // Always dark theme now
    const bgColor = theme.colors?.darkBackground || '#030712'
    const inputBgColor = theme.colors?.darkPaper || '#111827'
    
    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollbarWidth: 'thin',
                    scrollbarColor: theme?.customization?.isDarkMode
                        ? `${theme.colors?.primaryMain} ${theme.colors?.darkPrimaryMain}`
                        : `${theme.colors?.primaryMain} ${theme.paper}`,
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        width: 8,
                        height: 8,
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.darkPrimaryMain : theme.paper
                    },
                    '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                        borderRadius: 8,
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.primaryMain : theme.colors?.primaryMain,
                        minHeight: 24,
                        border: `2px solid ${theme?.customization?.isDarkMode ? theme.colors?.darkPrimaryMain : theme.paper}`
                    },
                    '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.primaryDark : theme.colors?.primaryDark
                    },
                    '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.primaryDark : theme.colors?.primaryDark
                    },
                    '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.primaryDark : theme.colors?.primaryDark
                    },
                    '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                        backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.darkPrimaryMain : theme.paper
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "'Poppins', 'Inter', sans-serif",
                    fontWeight: 500,
                    borderRadius: '12px',
                    textTransform: 'none',
                    padding: '12px 24px',
                    fontSize: '0.875rem',
                    boxShadow: 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        boxShadow: '0 8px 25px -8px rgba(16, 185, 129, 0.3)',
                        transform: 'translateY(-2px)'
                    }
                },
                containedPrimary: {
                    backgroundColor: theme.colors?.primaryMain,
                    color: '#000000',
                    fontWeight: 600,
                    background: `linear-gradient(135deg, ${theme.colors?.primaryMain}, ${theme.colors?.primary200})`,
                    '&:hover': {
                        background: `linear-gradient(135deg, ${theme.colors?.primaryDark}, ${theme.colors?.primaryMain})`,
                    }
                },
                containedSecondary: {
                    backgroundColor: theme.colors?.darkLevel2,
                    color: theme.colors?.darkTextPrimary,
                    border: `1px solid ${theme.colors?.darkLevel1}`,
                    '&:hover': {
                        backgroundColor: theme.colors?.darkLevel1,
                        borderColor: theme.colors?.primaryMain,
                    }
                },
                outlined: {
                    borderColor: theme.colors?.primaryMain,
                    color: theme.colors?.primaryMain,
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: `${theme.colors?.primaryMain}20`,
                        borderColor: theme.colors?.primary200,
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: theme?.customization?.isDarkMode ? theme.colors?.paper : 'inherit',
                    background: theme?.customization?.isDarkMode ? theme.colors?.darkPrimaryLight : 'inherit'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: theme.colors?.darkPaper,
                    boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(16, 185, 129, 0.1)',
                    border: `1px solid ${theme.colors?.darkLevel1}`,
                    color: theme.colors?.darkTextPrimary
                },
                rounded: {
                    borderRadius: '16px'
                }
            }
        },
        MuiBox: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent'
            }
            }
          },          
        MuiGrid: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent'
              }
            }
          },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: theme.colors?.textDark,
                    padding: '24px',
                    backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.darkPaper : '#ffffff'
                },
                title: {
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: theme.heading
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px',
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
              root: {
                backgroundColor: `${theme.colors?.darkPaper} !important`
            }
            }
          },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px',
                    backgroundColor: theme?.customization?.isDarkMode ? theme.colors?.darkPaper : '#ffffff'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.darkTextSecondary,
                    paddingTop: '14px',
                    paddingBottom: '14px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    borderRadius: '16px',
                    margin: '6px 16px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: 'transparent',
                    border: '1px solid transparent',
                    '&.Mui-selected': {
                        color: '#000000',
                        backgroundColor: theme.colors?.primaryMain,
                        fontWeight: 600,
                        boxShadow: '0 4px 20px -4px rgba(16, 185, 129, 0.4)',
                        transform: 'translateX(8px) scale(1.02)',
                        border: `1px solid ${theme.colors?.primary200}`,
                        '&:hover': {
                            backgroundColor: theme.colors?.primary200,
                        },
                        '& .MuiListItemIcon-root': {
                            color: '#000000'
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.colors?.darkLevel1,
                        color: theme.colors?.primaryMain,
                        transform: 'translateX(6px)',
                        border: `1px solid ${theme.colors?.primaryMain}40`,
                        '& .MuiListItemIcon-root': {
                            color: theme.colors?.primaryMain
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.textDark,
                    fontWeight: 500
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.colors?.darkPaper,
                    borderRadius: '12px',
                    fontFamily: "'Poppins', sans-serif"
                },
                input: {
                    color: theme.colors?.darkTextPrimary,
                    '&::placeholder': {
                        color: theme.colors?.darkTextSecondary,
                        fontSize: '0.875rem'
                    },
                    '&.Mui-disabled': {
                        WebkitTextFillColor: theme.colors?.darkTextSecondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: inputBgColor,
                    borderRadius: '12px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors?.grey300,
                        borderWidth: '1px'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors?.primaryMain,
                        borderWidth: '2px'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.colors?.primaryMain,
                        borderWidth: '2px',
                        boxShadow: `0 0 0 3px ${theme.colors?.primaryLight}`
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 400,
                    background: 'transparent',
                    padding: '16px 14px',
                    borderRadius: '12px',
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '12px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: '12px'
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    color: theme.colors?.primaryMain,
                    '&.Mui-disabled': {
                        color: theme.colors?.grey300
                    }
                },
                mark: {
                    backgroundColor: theme.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: theme?.colors?.primaryLight
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.divider,
                    opacity: 1
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: theme?.customization?.isDarkMode 
                        ? 'rgba(15, 23, 42, 0.8)' 
                        : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: theme?.customization?.isDarkMode
                        ? '1px solid rgba(148, 163, 184, 0.1)'
                        : '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: theme?.customization?.isDarkMode
                        ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: theme?.customization?.isDarkMode 
                        ? 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)' 
                        : 'linear-gradient(180deg, #FAFBFF 0%, #F1F5F9 100%)',
                    borderRight: theme?.customization?.isDarkMode 
                        ? '1px solid rgba(148, 163, 184, 0.1)' 
                        : '1px solid rgba(148, 163, 184, 0.2)',
                    boxShadow: theme?.customization?.isDarkMode 
                        ? '4px 0 24px -8px rgba(0, 0, 0, 0.4)'
                        : '4px 0 24px -8px rgba(0, 0, 0, 0.1)'
                }
            }
        }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: theme.colors?.primaryDark,
                    background: theme.colors?.primary200
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.colors?.secondaryLight,
                    color: theme.colors?.primaryDark,
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: '#ffffff',
                    background: '#334155',
                    fontSize: '0.75rem'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: `linear-gradient(180deg, ${theme.colors?.darkPaper} 0%, ${theme.colors?.darkBackground} 100%)`,
                    borderRight: `1px solid ${theme.colors?.primaryMain}30`,
                    boxShadow: '8px 0 40px -12px rgba(0, 0, 0, 0.6), 4px 0 0 0 rgba(16, 185, 129, 0.1)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '1px',
                        background: `linear-gradient(180deg, transparent, ${theme.colors?.primaryMain}, transparent)`
                    }
                }
            }
        },
    }
}
