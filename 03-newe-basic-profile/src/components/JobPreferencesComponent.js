
import { GiPositionMarker, GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { SiYourtraveldottv } from 'react-icons/si';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { GoCalendar } from 'react-icons/go';


import '../style/JobPreferencesComponent.css'


export const JobPreferencesComponent = ({ user }) => {


  return (
    <article className='card-job-preferences'>
      <h2>Sobre el puesto que busca JohnnD:</h2>
      <section className='up-container'>
        <div className='item-container'>
          <GiPositionMarker />
          <p>{user.workPreferences.ubication}</p>
        </div>
        <div className='item-container'>
          <MdOutlineHomeWork />
          <p>{user.workPreferences.typeCompany}</p>
        </div>
        <div className='item-container'>
          <GiReceiveMoney />
          <p>{user.workPreferences.salaryRange}</p>
        </div>
      </section>
      <section className='down-container'>
        <div className='item-container'>
          <SiYourtraveldottv />
          <p>{user.workPreferences.availabilityToTravel ? 'Disponibilidad para viajar' : ''}</p>
        </div>
        <div className='item-container'>
          <VscRemoteExplorer />
          <p>{user.workPreferences.remoteWork ? 'Disponibilidad para trabajar en remoto' : ''}</p>
        </div>
        <div className='item-container'>
          <GoCalendar />
          <p>{user.workPreferences.immediateIncorporation ? 'Incorporación inmediata' : ''}</p>
        </div>
      </section>
    </article>
  )
}
