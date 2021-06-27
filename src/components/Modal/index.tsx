import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import styles from './styles.module.scss'
import Image from 'next/image'

const ModalComponent = ({ show, method, data }: any) => {

  const { login, avatar_url } = data

  return (
    <Modal isOpen={show} toggle={method} >
    <ModalBody>
     <Image src={avatar_url} className={styles._image} alt='avatar-image' />
     <p className={styles._text}>@{login}</p>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={method}>Close</Button>
    </ModalFooter>
    </Modal>
  )
}

export default ModalComponent
