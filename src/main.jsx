import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mailbox from './Mailbox'
import Mail from './Mail'
import CounterMain from './CounterMain'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mailbox />
    <Mail />
    <hr />
    <br />
<CounterMain />
  </StrictMode>,
)
