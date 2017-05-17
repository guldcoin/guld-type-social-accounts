import React from 'react'
import { Container } from 'reactstrap'
import { Icon } from 'react-icons-kit'
const icons = require('./icons.js').default

export default class SocialAccounts extends React.Component {
  render () {
    return <Container>
      <div style={{ margin: '0.75em' }}>
        <ul className='list-inline'>
          {this.props.socialAccounts.map(function (acct, i) {
            return <li className='list-inline-item'><a target='_blank' href={acct.url}><Icon icon={icons[acct.network.toLowerCase()]} /></a></li>
          })}
        </ul>
      </div>
    </Container>
  }
}
