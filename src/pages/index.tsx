
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NavbarComponent } from '@components'
import { useDispatch } from 'react-redux'
import { getUsers } from '@store/actions'
import wrapper from '@store'

const Home = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home pahe" />
      </Head>

      <NavbarComponent />
      <div>HOME PAGE</div>
      <button type="button" className='btn btn-primary'>Primary</button>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  () => {
    return store.dispatch(getUsers())
  }
)

export default Home
