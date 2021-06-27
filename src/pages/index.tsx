
import Head from 'next/head'
import { NavbarComponent, TableComponent } from '@components'
import { getUsers } from '@store/actions'
import wrapper from '@store'
import { Container } from 'reactstrap'
import { useSelector } from 'react-redux'

const labels = ['#', 'Username', 'Profile url', 'Type' ]

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
        <TableComponent data={users} labels={labels} />
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
