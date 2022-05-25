import logo from '../logo.svg'
import { ErrorButton } from './buttons/ErrorButton'
import { OkButton } from './buttons/OkButton'
import { WarningButton } from './buttons/WarningButton'


export const Header = ({ setMessage }) => {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <section className='buttons-container'>
        <WarningButton setMessage={setMessage} />
        <OkButton setMessage={setMessage} />
        <ErrorButton setMessage={setMessage} />
      </section>
    </header>
  )
}
