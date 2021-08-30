import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'

const useStyles = makeStyles(theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(5, 0, 0, 0),
  },
  div_space: {
    margin: theme.spacing(3, 0, 0, 0),
  },
}))

export default function Index(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)

  return (
    <>
   
      {state.loading ? null : (
        <Head>
          <title>{state.pageData.title}</title>
        </Head>
      )}
      <Container maxWidth="lg">
        {state.loading ? (
          <LoadMask fullscreen />
        ) : (
          <div className={classes.main}>
            {/* <Typography variant="h3" component="h1" gutterBottom color="primary">
              {state.pageData.slots.heading}
            </Typography>
            <CmsSlot>{state.pageData.slots.description}</CmsSlot> */}
            <div><img  height="550" width="1100" src="https://images.contentstack.io/v3/assets/blt1fa4edfda0d12352/bltc4648fbefaa55694/6114f8a7d78aee13bd1dbaf4/1.jpg"></img></div>
          <div className={classes.div_space}><img width="1100" src="https://images.contentstack.io/v3/assets/blt1fa4edfda0d12352/blt760c009b7d649e51/61166cb5d107d613a27e766f/home_2.jpg" ></img></div>
          <div className={classes.div_space}>
           <img width="1100" src="https://images.contentstack.io/v3/assets/blt1fa4edfda0d12352/blt14549bcf820ac048/6116712e27dc6a13c46aa1d5/2_1.jpg"></img>
          </div>
          <div className={classes.div_space}>
            <img width="1100" src="https://images.contentstack.io/v3/assets/blt1fa4edfda0d12352/bltb7eb944c57537ec0/6116723260bb0f13c2eacf91/2.jpg"></img>
          </div>
          <div className={classes.div_space}>
            <img width="1100" src="https://images.contentstack.io/v3/assets/blt1fa4edfda0d12352/blt8983e8f3da5e7376/6114fa30f30c8713cf6e4b17/1.jpg"></img>
          </div>
          <div className={classes.div_space}>
            <img width="1100" src=""></img>
          </div>
            
          </div>
        )}
      </Container>
    </>
  )
}

Index.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999')
  return fetchFromAPI(options)
})
