import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import styles from './styles.module.scss'
import Image from 'next/image'

const ModalComponent = ({ show, method, data }: any) => {

  const { login, avatar_url } = data

  return (
    <Modal isOpen={show} toggle={method} >
    <ModalBody>
      <div className={styles._imageParent}>
     <Image src={avatar_url ?? 'https://picsum.photos/150/150'}  alt='avatar-image' width={150} height={150} className={styles._image}/>

      </div>
     <p className={styles._text}>@{login}</p>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={method}>Close</Button>
    </ModalFooter>
    </Modal>
  )
}

export default ModalComponent
