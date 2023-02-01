import './App.css';

function App() {
  var odOptions = {
    clientId: '9e63e70f-5443-4649-8d4b-b7df4d958bac',
    action: 'query',
    multiSelect: true,
    openInNewWindow: false,
    advanced: {
      advanced: {
        redirectUri: 'http://localhost:5173',
      },
    },

    success: function (files) {
      /* success handler */
    },
    cancel: function () {
      /* cancel handler */
      console.log('cancel');
    },
    error: function (error) {
      /* error handler */
      console.log(error, 'apperr');
    },
  };
  const oneDriveOpen = () => {
    window.OneDrive.open(odOptions);
  };
  return (
    <div className='App'>
      <button onClick={oneDriveOpen}>open Picker</button>
    </div>
  );
}

export default App;
