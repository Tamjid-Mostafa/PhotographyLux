
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';


function App() {

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
