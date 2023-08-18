import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import About from '../pages/About'
import Note from '../pages/note'
import RefComp from '../pages/14RefComp'
const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/about', element: <About/>},
    {path: '/note', element: <Note/>},
    {path: '/ref', element: <RefComp/>}
])

export default router;