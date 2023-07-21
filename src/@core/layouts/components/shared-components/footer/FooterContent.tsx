// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FooterContent = () => {
  // ** Var

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2, display: 'flex', color: 'text.secondary' }}>
        {`© ${new Date().getFullYear()}, Diseñado y Desarrollado `}
        <Box component='span' sx={{ mx: 1, color: 'error.main' }}>
          ❤️
        </Box>
        {`por`}
        <Typography sx={{ ml: 1 }} target='_blank' href='https://pixinvent.com' component={StyledCompanyName}>
          ---
        </Typography>
      </Typography>
    </Box>
  )
}

export default FooterContent
