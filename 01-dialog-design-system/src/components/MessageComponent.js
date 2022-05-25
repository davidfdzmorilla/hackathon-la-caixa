

import './MessageComponent.css'

export const MessageComponent = ({ message }) => {

  return (
    message.alert &&
    <article className='card'>
      <div className='card-content'>
        {message?.icon}
        <h2>{message?.alert}</h2>
        <p>{message?.description}</p>
        <div className='buttons-container'>
          {message?.actions.map(action => action)}
        </div>
      </div>
      {message?.closeIcon}
    </article>
  )
}
