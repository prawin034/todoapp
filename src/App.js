import './App.css';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/LAYOUT/Layout';
import LoadingSpinner from './components/TOOLS/LoadingSpinner';
import UseCustomHtpp from './hooks/UseCustomHtpp';

const NEWTASK = React.lazy(() => import('./components/NEWTASK/newTask'));
const AllTaskfile = React.lazy(() =>
  import('./components/ALLTASKS/AllTaskfile')
);

function App(props) {
  const { isLoading, error, sendRequest: sendingData } = UseCustomHtpp();

  const enterTaskHandler = async (taskText) => {
    const transferedTasks = (datapassing) => {
      const generatedId = datapassing.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };
    sendingData(
      {
        url: 'https://todo-app-887f0-default-rtdb.firebaseio.com/SEND.json',
        method: 'POST',
        body: taskText,
        headers: {
          'content-type': 'application/json',
        },
      },

      transferedTasks
    );
  };

  return (
    <div className="App">
      <Layout>
        <main>
          <Suspense
            fallback={
              <div className="centered">
                <LoadingSpinner />
              </div>
            }
          >
            <Route path="/allTasks" exact>
              <AllTaskfile />
            </Route>

            <Route path="/newTask" exact>
              <NEWTASK onsendData={enterTaskHandler} loading={isLoading} />
              {error && <p className="centered">{error}</p>}
            </Route>
          </Suspense>
        </main>
      </Layout>
    </div>
  );
}

export default App;
