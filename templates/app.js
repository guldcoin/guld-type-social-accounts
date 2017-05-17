import {SocialAccounts} from 'reactstrap-social-accounts'
import ReactDOM from 'react-dom'
const socialAccountsSchema = require('schema-social-accounts')
const good = socialAccountsSchema.examples.good

ReactDOM.render(
  <SocialAccounts socialAccounts={good} />,
    document.getElementById('social-accounts')
)
