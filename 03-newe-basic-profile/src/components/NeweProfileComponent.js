
import { useState } from 'react';
import { VscGraph } from 'react-icons/vsc';

import '../style/NeweProfileComponent.css'


export const NeweProfileComponent = ({ user }) => {

  const profileData = <>
    <p>Perfil validado en Newe de {user.name}</p>
    <div className='points-container'>
      <VscGraph />
      <p>#0 / 0pts</p>
    </div>
  </>

  const timeLineData = <button className='add-experience-button'>AÑADIR EXPERIENCIA</button>


  const [neweCardData, setNeweCardData] = useState(profileData)
  const [type, setTyype] = useState('profile')

  const handleCard = type => {
    switch (true) {
      case type === 'profile':
        setTyype(type)
        setNeweCardData(profileData)
        break;
      case type === 'timeLine':
        setTyype(type)
        setNeweCardData(timeLineData)
        break;
      default:
        break;
    }
  }

  return (
    <section className='newe-profile-container'>
      <menu>
        <button className={type === 'profile' ? 'active' : ''} onClick={() => handleCard('profile')}>Perfil Nuwe</button>
        <button className={type === 'timeLine' ? 'active' : ''} onClick={() => handleCard('timeLine')}>Timeline CV</button>
      </menu>
      <article className='card-newe-profile'>
        {neweCardData}
      </article>
    </section>
  )
}