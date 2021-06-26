
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NavbarComponent, TableComponent } from '@components'
import { useDispatch } from 'react-redux'
import { getUsers } from '@store/actions'
import wrapper from '@store'
import { Container, Input} from 'reactstrap'
import { useSelector } from 'react-redux'


const Home = () => {

  const { users } = useSelector((state: any) => state)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>

      <NavbarComponent />
      <Container fluid="md" className='mt-5'>
        <TableComponent data={users} />
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  () => {
    return store.dispatch(getUsers())
  }
)

export default Home
