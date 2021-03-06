import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

const NavbarComponent = () => {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((isOpen: any) => !isOpen);

  const navigation = (route: string) => {
    if(router.pathname != 'route') router.push(route)
  }

  const returnActive = (route) => {
    if(router.pathname == route) return 'active'
  }

  return (
    <>
    <Navbar color="dark" dark expand="md" className='p-3'>
      <Container fluid="md" >
        <NavbarBrand >GITHUB APP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={styles._navItem}>
              <NavLink className={`${styles._link} ${returnActive('/')}`} onClick={() => navigation('/')}>Users</NavLink>
            </NavItem>
            <NavItem className={styles._navItem}>
              <NavLink className={`${styles._link} ${returnActive('/repositories')}`} onClick={() => navigation('repositories')}>Repositories</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarComponent
