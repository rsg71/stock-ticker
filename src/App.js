import { useEffect } from 'react';
import './App.css';
import Thing from './components/Thing/Thing';




function App() {

  useEffect(() => {
    const ws = new WebSocket(`wss://streamer.finance.yahoo.com/`)

    ws.onopen = function open() {
      console.log('connected')
      ws.send(JSON.stringify({
        subscribe: ['GME']
      }));
    }

    ws.onclose = function close() {
      console.log('disconnected')
    }

    ws.onmessage = function incoming(data) {
      console.log('incoming message');
      console.log(data)
    }

  }, []);



  return (
    <div className="App">
      <h1>STONKS</h1>

      <Thing />
    </div>
  );
}

export default App;
