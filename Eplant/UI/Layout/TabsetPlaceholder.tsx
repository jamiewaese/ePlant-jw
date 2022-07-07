import { Add } from '@mui/icons-material'
import { Color, Stack, useTheme, Button } from '@mui/material'
import Box from '@mui/material/Box'
import * as React from 'react'
import { SVGProps } from 'react'

const Illustration = ({
  color,
  ...props
}: { color: string } & SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 230 410"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M167.727 250.002H116.766C115.086 222.002 122.368 199.604 129.086 174.4C185.086 172.72 234.926 136.88 229.326 75.8408C228.767 71.3603 225.967 67.4424 220.928 66.8799C182.287 65.2002 147.006 82.5599 128.53 112.239C125.17 101.598 119.569 90.9579 113.409 80.3169C111.729 56.2389 105.569 31.0359 84.8495 15.9189C63.0095 -0.3191 34.4515 -0.882105 8.68954 1.35989C4.20904 1.91848 -0.271365 4.7193 0.291135 9.7583C3.08803 42.8013 18.7681 70.8013 50.1271 83.6803C65.8071 89.8405 83.7291 93.1998 100.525 92.0787C116.205 118.399 120.127 142.477 111.724 172.72C111.166 173.841 111.166 174.958 110.603 176.079C91.5641 138.559 53.482 120.638 8.12304 129.599C4.76364 130.158 1.40424 134.08 1.96284 137.997C5.32224 172.158 23.2438 197.357 56.2828 208.557C70.2828 213.596 86.5208 215.838 101.642 214.717C99.9621 225.916 98.8411 233.197 99.9622 249.998H46.7631C27.7241 249.998 5.32214 247.759 5.32214 276.318C5.32214 296.478 19.3221 302.08 33.8811 303.197C41.1623 331.756 45.6432 362.556 57.4011 389.435C65.7996 409.037 86.5222 409.595 106.682 409.595C126.842 409.595 147.561 408.474 155.963 388.876C167.725 361.997 172.201 331.196 179.483 302.638C194.042 301.517 208.042 295.919 208.042 275.759C209.167 247.759 186.769 250.001 167.73 250.001L167.727 250.002ZM212.528 84.2418C212.528 113.922 197.969 136.32 169.407 148.082C158.208 152.562 145.329 155.363 133.009 156.48C134.689 112.804 170.529 85.3632 212.529 84.2422L212.528 84.2418ZM18.2079 17.6008C36.6879 16.4797 55.169 17.6008 71.407 27.1203C88.208 37.1983 94.3679 56.8003 96.0479 75.2803C58.5279 75.8428 24.9269 56.2413 18.2079 17.6003V17.6008ZM98.8489 196.801C89.3294 197.359 80.369 196.242 71.408 194.562C43.967 188.961 25.4859 171.043 20.4469 144.723C59.6459 139.683 89.3259 160.402 101.646 196.8H98.849L98.8489 196.801ZM148.126 362.561C144.767 374.881 141.966 387.76 127.966 391.12C124.607 391.678 91.0049 392.241 87.6459 391.678C73.6459 388.319 70.2869 375.44 66.9269 362.557C60.7667 338.479 57.4074 322.795 52.3679 300.397H162.688C157.645 322.803 154.286 338.483 148.126 362.561V362.561ZM182.849 283.6H32.209C26.6073 283.6 22.1309 280.799 22.1309 275.201C22.1309 269.6 26.6115 266.803 32.209 266.803H182.849C188.451 266.803 192.927 269.604 192.927 275.201C192.927 280.803 188.446 283.6 182.849 283.6Z"
      fill={color}
    />
  </svg>
)

/**
 * Displayed when the user has closed all tabs.
 * @param props.addTab Called when the user adds a new tab.
 * @returns
 */
export default function TabsetPlaceholder(props: { addTab: () => void }) {
  const theme = useTheme()
  return (
    <Stack gap={6} direction="column" width="100%">
      <Illustration
        color={theme.palette.secondary.main}
        style={{
          maxHeight: '250px',
        }}
      />
      <Box justifyContent="center" display="flex">
        <Button
          variant="outlined"
          color="primary"
          onClick={props.addTab}
          endIcon={<Add />}
        >
          ADD TAB
        </Button>
      </Box>
    </Stack>
  )
}
