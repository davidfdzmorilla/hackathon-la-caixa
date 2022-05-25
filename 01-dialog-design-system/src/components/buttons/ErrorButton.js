import { AiOutlineCloseCircle } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'


export const ErrorButton = ({ setMessage }) => {

  const handleClose = () => {
    setMessage({})
  }

  const actions = []

  const handleMessage = () => {
    setMessage({
      closeIcon: <AiOutlineCloseCircle style={{ cursor: 'pointer' }} onClick={handleClose} />,
      alert: '¡Upss!',
      description: 'Algo a pasado',
      icon: <VscError style={{ backgroundColor: 'red', fontSize: '6rem' }} />,
      actions
    })
  }
  return (
    <button onClick={handleMessage}>Error</button>
  )
}
