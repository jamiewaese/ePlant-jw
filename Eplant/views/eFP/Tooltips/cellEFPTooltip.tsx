import {
  Popper,
  Grow,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from '@mui/material'
import { EFPGroup, EFPTissue, EFPData, EFPState } from '../types'
import React from 'react'
import { setStroke } from './EFPTooltip'

function CellSVGTooltip(props: {
  el: SVGElement | null
  group: EFPGroup
  tissue: EFPTissue
  data: EFPData
  state: EFPState
}) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()

  React.useEffect(() => {
    const enterListener = () => {
      setOpen(true)
      setStroke(props.el, '#000000', '3')
    }
    const leaveListener = () => {
      setOpen(false)
      setStroke(props.el, '#FFFFFF', '2')
    }
    if (props.el) {
      props.el.addEventListener('mouseenter', enterListener)
      props.el.addEventListener('mouseleave', leaveListener)
      return () => {
        if (props.el) {
          props.el.removeEventListener('mouseenter', enterListener)
          props.el.removeEventListener('mouseleave', leaveListener)
          setOpen(false)
        }
      }
    }
  }, [props.el])
  return (
    <Popper transition anchorEl={props.el} open={open}>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} timeout={350}>
          <Box
            sx={(theme) => ({
              backgroundColor: theme.palette.background.transparentOverlay,
              backdropFilter: 'blur(7px)',
              boxShadow: theme.shadows[3],
              borderRadius: 1,
            })}
          >
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    {props.tissue.name.charAt(0).toUpperCase() +
                      props.tissue.name.slice(1)}
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      color: theme.palette.secondary.main,
                      textAlign: 'left',
                    }}
                  >
                    Localization Score
                  </TableCell>
                  <TableCell>{props.tissue.mean}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grow>
      )}
    </Popper>
  )
}

export default CellSVGTooltip
