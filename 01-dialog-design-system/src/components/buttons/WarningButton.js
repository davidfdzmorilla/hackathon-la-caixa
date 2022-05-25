import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiErrorWarningLine } from 'react-icons/ri'

export const WarningButton = ({ setMessage }) => {

  const handleClose = () => {
    setMessage({})
  }

  const actions = [
    <button key={Math.random()} onClick={handleClose}>Borrar</button>,
    <button key={Math.random()} onClick={handleClose}>Cancelar</button>
  ]

  const handleMessage = () => {
    setMessage({
      closeIcon: <AiOutlineCloseCircle style={{ cursor: 'pointer' }} onClick={handleClose} />,
      alert: '¡Cuidado!',
      description: 'No podrás volver atrás',
      icon: <RiErrorWarningLine style={{ backgroundColor: '#fffae3', color: '#ffd912', fontSize: '6rem' }} />,
      actions
    })
  }


  return (
    <button onClick={handleMessage}>Warning</button>
  )
}
