// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { utils, writeFile } from 'xlsx'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
  name: string
  nameSearch: string
  data?: any
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value, name, nameSearch, data } = props
  const handleExport = () => {
    const wb = utils.book_new()
    const ws = utils.json_to_sheet(data)
    utils.book_append_sheet(wb, ws, 'Hoja 1')
    writeFile(wb, 'pedidos.xlsx')
  }

  return (
    <Box
      sx={{
        py: 4,
        px: 6,
        rowGap: 2,
        columnGap: 4,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Button
        onClick={() => {
          if (data) {
            handleExport()

            return
          }
        }}
        color='primary'
        variant='tonal'
        startIcon={<Icon icon='tabler:upload' />}
      >
        Exportar
      </Button>
      <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <CustomTextField
          value={value}
          sx={{ mr: 4 }}
          placeholder={nameSearch}
          onChange={e => handleFilter(e.target.value)}
        />

        <Button onClick={toggle} variant='contained' sx={{ '& svg': { mr: 2 } }}>
          <Icon fontSize='1.125rem' icon='tabler:plus' />
          {name}
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
