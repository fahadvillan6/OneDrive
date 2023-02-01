import './App.css';

function App() {
  const clientId = import.meta.env.VITE_CLIENTID;

  const odOptions = {
    clientId: clientId,
    action: 'query',
    multiSelect: true,
    advanced: {
      redirectUri: 'http://localhost:5173',
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
  const launchSaveToOneDrive = () => {
    let odOptions = {
      clientId: clientId,
      action: 'save',
      sourceInputElementId: 'fileUploadControl',
      sourceUri: '',
      fileName: 'Screenshot.png',
      openInNewWindow: false,
      advanced: {
        redirectUri: 'http://localhost:5173',
      },
      success: function (files) {
        console.log('ok');
      },
      progress: function (percent) {
        console.log(percent);
      },
      cancel: function () {
        /* cancel handler */
      },
      error: function (error) {
        console.error(error, 'err');
      },
    };
    OneDrive.save(odOptions);
  };

  return (
    <div className='App'>
      <input id='fileUploadControl' name='fileUploadControl' type='file' />
      <button onClick={launchSaveToOneDrive}>Save to OneDrive</button>
      <button onClick={oneDriveOpen}>open Picker</button>
    </div>
  );
}

export default App;
