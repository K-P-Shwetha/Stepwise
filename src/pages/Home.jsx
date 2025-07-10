import '../components/home.css'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const nav=useNavigate();
    return (
        <div className='home' >
            <button className='M'onClick={() => nav('/main')}>
    StepWise
            </button>
        </div>
    )
}