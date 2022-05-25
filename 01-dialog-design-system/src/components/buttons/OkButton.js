import { AiOutlineCloseCircle } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'


export const OkButton = ({ setMessage }) => {
  const handleClose = () => {
    setMessage({})
  }

  const actions = [
    <button key={Math.random()} onClick={handleClose}>Cerrar pestaña</button>
  ]

  const handleMessage = () => {
    setMessage({
      closeIcon: <AiOutlineCloseCircle style={{ cursor: 'pointer' }} onClick={handleClose} />,
      alert: '¡Vamos!',
      description: 'Todo ha salido bien :)',
      icon: <TiTick style={{ backgroundColor: 'green', fontSize: '6rem' }} />,
      actions
    })
  }


  return (
    <button onClick={handleMessage}>Ok</button>
  )
}
