
import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NavbarComponent, TableComponent } from '@components'
import { useDispatch } from 'react-redux'
import { getUsers } from '@store/actions'
import wrapper from '@store'
import { Container, Input} from 'reactstrap'
import { useSelector } from 'react-redux'
import { getRepositories } from '@store/repositories/action'

const labels = ['#', 'Full Name', 'Repository url', 'description']

const Repositories = () => {

  const { repositories } = useSelector((state: any) => state)

  return (
    <>
      <Head>
        <title>Repositories</title>
        <meta name="description" content="Repositories page" />
      </Head>

      <NavbarComponent />
      <Container fluid="md" className='mt-5'>
        <TableComponent data={repositories} flag='repositories'  labels={labels}/>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  () => {
    return store.dispatch(getRepositories())
  }
)

export default Repositories
