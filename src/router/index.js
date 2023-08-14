import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import About from '../pages/About'
import Note from '../pages/note'
const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/about', element: <About/>},
    {path: '/note', element: <Note/>}
])

export default router;