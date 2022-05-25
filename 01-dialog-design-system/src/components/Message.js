import { MessageComponent } from './MessageComponent'

export const Message = ({ message }) => {
  return (
    <section className='message-container'>
      <MessageComponent message={message} />
    </section>
  )
}
