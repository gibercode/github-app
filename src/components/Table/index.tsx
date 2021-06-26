import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, searchUsers } from '@store/actions'
import {
  Card,
  Table,
  CardTitle,
  Input,
  Row,
  Col,
  Button,
  Spinner,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

const TableComponent = ({ data }) => {

  const { loader } = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const [ inputValue, setInputValue ] = useState('')

  const searchInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const search = () => {
    if(inputValue.length) return dispatch(searchUsers(inputValue))
    dispatch(getUsers())
  }

  return (
    <Card body className='p-5 mb-5'>
      <CardTitle tag="h5">GITHUB USERS</CardTitle>

      <Row className='mt-3 mb-3'>
        <Col md="9">
          <Input type="email" name="email"  placeholder="Search..." onChange={searchInput} />
        </Col>
        <Col md="3">
        <Button color="info" className='w-100' onClick={search}>
          { loader?.loader ? <Spinner color="dark" size="sm">{''}</Spinner> : 'Search' }
        </Button>
        </Col>
      </Row>

      {
        data?.users.length ?
        <>
        <Table hover borderless className={styles._table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Profile url</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className={styles._tableBody}>
            {
              data?.users.map(item => {
                return (
                 <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.login}</td>
                  <td>{item.html_url}</td>
                  <td>{item.type}</td>
                </tr>
                )
              })
            }
        </tbody>
      </Table>
      </> : <p className={styles._text}>Your search doesn't match any user</p>
      }

<Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    </Pagination>

    </Card>
  )
}

export default TableComponent
