import { useState, FC } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, searchUsers, getRepositories, searchRepositories} from '@store/actions'
import { ModalComponent } from '@components'
import { NavProps } from './type'
import {
  Card,
  Table,
  CardTitle,
  Input,
  Row,
  Col,
  Button,
  Spinner
} from 'reactstrap'

const TableComponent: FC<NavProps> = ({ data, flag = 'users', labels }) => {

  const { loader } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const [ inputValue, setInputValue ] = useState('')
  const [show, setShow] = useState(false)
  const [currentUser, setCurrenUser] = useState({})

  const searchInput = (event) => {
    const value = event.target.value
    setInputValue(value)
  }

  const search = () => {
    if(flag == 'users'){
      if(inputValue.length) return dispatch(searchUsers(inputValue))
      dispatch(getUsers())
    }

    if(flag == 'repositories') {
      if(inputValue.length) return dispatch(searchRepositories(inputValue))
      dispatch(getRepositories())
    }
  }

  const showModal = (user: any) => {
    setShow(show => !show)
    setCurrenUser(user)
  }

  return (
    <>
    <Card body className='p-5 mb-5'>
      <CardTitle tag="h5">GITHUB {flag.toUpperCase()}</CardTitle>

      <Row className='mt-3 mb-3'>
        <Col md="9">
          <Input type="email" name="email"  placeholder="Search..." onChange={searchInput} />
        </Col>
        <Col md="3">
        <Button color="info" className={`${styles._button} w-100`}  onClick={search}>
          { loader?.loader ? <Spinner color="dark" size="sm">{''}</Spinner> : "Search" }
          {/* Search */}
        </Button>
        </Col>
      </Row>

      {
        data[flag].length ?
        <>
        <Table hover borderless className={styles._table} responsive>
        <thead>
          <tr>
            {
              labels.map((label: string, index: number) => {
                return <th key={index}>{label}</th>
              })
            }
          </tr>
        </thead>
        <tbody className={styles._tableBody}>
            {
              data[flag].map(item => {
                return (
                 <tr key={item.id} onClick={flag == 'users' ? () => showModal(item) : () => {}}>
                  <th>{item.id}</th>
                  <td>{flag == 'users' ? item.login : item.full_name}</td>
                  <td>{item.html_url}</td>
                  <td>{flag == 'users' ? item.type : item.description}</td>
                </tr>
                )
              })
            }
        </tbody>
      </Table>
      </> : <p className={styles._text}>Your search doesn't match any record</p>
      }
    </Card>
    <ModalComponent show={show} method={showModal} data={currentUser}/>
    </>
  )
}

export default TableComponent
