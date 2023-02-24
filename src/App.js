import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Route/Route';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
