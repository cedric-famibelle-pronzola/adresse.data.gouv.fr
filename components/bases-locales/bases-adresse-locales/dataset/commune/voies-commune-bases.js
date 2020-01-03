import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'


import withFetch from '../../../../hoc/with-fetch';
import VoiesTableBases from './voies-table-bases';

class VoiesCommuneBases extends React.Component {
  static propTypes = {
    voies: PropTypes.array
  }

  static defaultProps = {
    voies: []
  }

  // handleSelect = voie => {
  //   Router.push(
  //     `/bases-locales/jeux-de-donnees/${voie.id}/${voie.codeCommune}/${voie.codeVoie}`
  //   )
  // }

  render() {
    console.log(this.props)
    const {voies} = this.props

    return (
      <div className='voies'>
        {console.log(voies)}
        <VoiesTableBases voies={voies}/>
        <style jsx>{`
          .voies {
            margin-top: 2em;
          }
          `}</style>
      </div>
    )
  }
}

export default VoiesCommuneBases
