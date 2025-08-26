import { createTheme, PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#007AFF', // Apple's signature blue
      light: '#5AC8FA',
      dark: '#0051D0',
    },
    secondary: {
      main: '#5AC8FA', // Soft blue
      light: '#88D5FF',
      dark: '#0099CC',
    },
    background: {
      default: mode === 'dark' ? '#000000' : '#ffffff',
      paper: mode === 'dark' ? '#1C1C1E' : '#F2F2F7',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#1D1D1F',
      secondary: mode === 'dark' ? '#98989D' : '#86868B',
    },
    grey: {
      50: '#F2F2F7',
      100: '#E5E5EA', 
      200: '#D1D1D6',
      300: '#C7C7CC',
      400: '#AEAEB2',
      500: '#8E8E93',
      600: '#636366',
      700: '#48484A',
      800: '#3A3A3C',
      900: '#1C1C1E',
    },
    divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.13)' : 'rgba(0, 0, 0, 0.04)',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '3.5rem', // 56px - Apple's hero titles (like iPhone page)
      fontWeight: 600, // Apple uses 600, not 700
      lineHeight: 1.07,
      letterSpacing: '-0.005em',
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
        lineHeight: 1.1,
      },
    },
    h2: {
      fontSize: '2.5rem', // 40px - Apple's section headers 
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: '-0.003em',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.75rem', // 28px - Apple's subsection headers
      fontWeight: 600,
      lineHeight: 1.14,
      letterSpacing: '-0.003em',
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem', // 24px - Apple's card headers
      fontWeight: 600,
      lineHeight: 1.17,
      letterSpacing: '-0.002em',
    },
    h5: {
      fontSize: '1.25rem', // 20px - Small headers
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.001em',
    },
    h6: {
      fontSize: '1.125rem', // 18px - Tiny headers
      fontWeight: 600,
      lineHeight: 1.22,
    },
    body1: {
      fontSize: '1.125rem', // 18px - Apple's body text (they use larger text)
      lineHeight: 1.38,
      fontWeight: 400,
      letterSpacing: '-0.002em',
      '@media (max-width:768px)': {
        fontSize: '1rem',
        lineHeight: 1.47,
      },
    },
    body2: {
      fontSize: '1rem', // 16px - Smaller body text
      lineHeight: 1.47,
      fontWeight: 400,
      letterSpacing: '-0.002em',
    },
    subtitle1: {
      fontSize: '1.125rem', // 18px - Apple's subtitles
      fontWeight: 400, // Apple uses 400 for subtitles, not 500
      lineHeight: 1.38,
      letterSpacing: '-0.002em',
    },
    subtitle2: {
      fontSize: '1rem', // 16px - Small subtitles  
      fontWeight: 400,
      lineHeight: 1.47,
      letterSpacing: '-0.002em',
    },
    caption: {
      fontSize: '0.875rem', // 14px - Apple's fine print
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: '-0.001em',
      color: mode === 'dark' ? '#98989D' : '#86868B', // Apple's secondary text
    },
  },
  shape: {
    borderRadius: 12, // Apple's signature corner radius
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          backgroundColor: mode === 'dark' ? '#000000' : '#ffffff',
          color: mode === 'dark' ? '#ffffff' : '#1D1D1F',
        },
        '*': {
          '&::-webkit-scrollbar': {
            width: 4,
            height: 4,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: mode === 'dark' ? '#48484A' : '#C7C7CC',
            borderRadius: 2,
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#636366' : '#AEAEB2',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 980, // Apple's pill-shaped buttons
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1rem',
          letterSpacing: '-0.003em',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          minHeight: 44, // Apple's minimum touch target
          position: 'relative',
          overflow: 'hidden',
        },
        contained: {
          background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 1px 3px rgba(0, 122, 255, 0.4), 0 1px 2px rgba(0, 122, 255, 0.6)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0051D0 0%, #007AFF 100%)',
            boxShadow: '0 4px 14px rgba(0, 122, 255, 0.4), 0 2px 6px rgba(0, 122, 255, 0.6)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            transition: 'all 0.1s',
          },
        },
        outlined: {
          borderWidth: 1.5,
          borderColor: '#007AFF',
          color: '#007AFF',
          backgroundColor: 'transparent',
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: 'rgba(0, 122, 255, 0.04)',
            transform: 'translateY(-1px)',
          },
        },
        text: {
          color: '#007AFF',
          '&:hover': {
            backgroundColor: 'rgba(0, 122, 255, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Apple's signature corner radius for cards
          backgroundColor: mode === 'dark' ? '#1C1C1E' : '#ffffff',
          border: `0.5px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.13)' : 'rgba(0, 0, 0, 0.04)'}`,
          boxShadow: mode === 'dark'
            ? '0 1px 3px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.95)'
            : '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'dark'
              ? '0 8px 25px rgba(0, 0, 0, 0.9), 0 4px 10px rgba(0, 0, 0, 0.95)'
              : '0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.20)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: mode === 'dark' 
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0,122,255,0.1), transparent)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width: 768px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
          '@media (min-width: 1024px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.875rem',
          backgroundColor: mode === 'dark' ? 'rgba(142, 142, 147, 0.16)' : 'rgba(0, 122, 255, 0.1)',
          color: mode === 'dark' ? '#5AC8FA' : '#007AFF',
          border: `1px solid ${mode === 'dark' ? 'rgba(90, 200, 250, 0.3)' : 'rgba(0, 122, 255, 0.2)'}`,
          '&:hover': {
            backgroundColor: mode === 'dark' ? 'rgba(90, 200, 250, 0.2)' : 'rgba(0, 122, 255, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' 
            ? 'rgba(28, 28, 30, 0.8)' 
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: `0.5px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.13)' : 'rgba(0, 0, 0, 0.04)'}`,
          boxShadow: 'none',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: mode === 'dark' ? 'rgba(142, 142, 147, 0.16)' : 'rgba(0, 0, 0, 0.04)',
        },
        bar: {
          borderRadius: 4,
          background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
        },
      },
    },
  },
});