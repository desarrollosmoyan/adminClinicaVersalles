// ** Next Import

// ** Third Party Imports

import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import themeConfig from 'src/configs/themeConfig'
import { usePedidosServices } from 'src/service/usePedidosServices'
import { format } from 'date-fns'

// ** Demo Components Imports

export type InvoiceType = {
  id: number
  name: string
  total: number
  avatar: string
  service: string
  dueDate: string
  address: string
  company: string
  country: string
  contact: string
  avatarColor?: string
  issuedDate: string
  companyEmail: string
  balance: string | number
  invoiceStatus: any
}

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  '&:not(:last-child)': {
    paddingRight: `${theme.spacing(2)} !important`
  }
}))

const DetallePedido = () => {
  const {
    query: { id }
  } = useRouter()

  const { Pedido } = usePedidosServices()
  const { dataPedido } = Pedido({ pedidoId: id! as string })

  const theme = useTheme()

  return (
    <Card>
      <CardContent sx={{ p: [`${theme.spacing(6)} !important`, `${theme.spacing(10)} !important`] }}>
        <Grid container>
          <Grid item sm={6} xs={12} sx={{ mb: { sm: 0, xs: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                <svg width={34} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    fill={theme.palette.primary.main}
                    d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
                  />
                  <path
                    fill='#161616'
                    opacity={0.06}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
                  />
                  <path
                    fill='#161616'
                    opacity={0.06}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    fill={theme.palette.primary.main}
                    d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
                  />
                </svg>
                <Typography variant='h4' sx={{ ml: 2.5, fontWeight: 700, lineHeight: '24px' }}>
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <div>
                <Typography sx={{ mb: 2, color: 'text.secondary' }}>{dataPedido?.attributes?.cliente}</Typography>
                <Typography sx={{ mb: 2, color: 'text.secondary' }}>{dataPedido?.attributes?.descripcion}</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
              <Table sx={{ maxWidth: '210px' }}>
                <TableBody sx={{ '& .MuiTableCell-root': { py: `${theme.spacing(1.5)} !important` } }}>
                  <TableRow>
                    <MUITableCell>
                      <Typography variant='h4'>Pedido</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography variant='h4'>{`#${id}`}</Typography>
                    </MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>
                      <Typography sx={{ color: 'text.secondary' }}>Nombre Pedido:</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography sx={{ color: 'text.secondary' }}>{dataPedido?.attributes?.nombrePedido}</Typography>
                    </MUITableCell>
                  </TableRow>
                  <TableRow>
                    <MUITableCell>
                      <Typography sx={{ color: 'text.secondary' }}>Fecha:</Typography>
                    </MUITableCell>
                    <MUITableCell>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {dataPedido?.attributes?.createdAt &&
                          format(new Date(dataPedido?.attributes?.createdAt), 'yyyy-MM-dd')}
                      </Typography>
                    </MUITableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

  // return <UserViewPage tab={tab} invoiceData={invoiceData} />
}

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [
//       { params: { tab: 'account' } },
//       { params: { tab: 'security' } },
//       { params: { tab: 'billing-plan' } },
//       { params: { tab: 'notification' } },
//       { params: { tab: 'connection' } }
//     ],
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
//   // const res = await axios.get('/apps/invoice/invoices')
//   // const invoiceData: InvoiceType[] = res.data.allData

//   return {
//     props: {
//       id: params?.id
//     }
//   }
// }

export default DetallePedido
