import bg from '../assets/munstie.jpg'
import comment from '../assets/munstie_comment.png'

const Munstie = () =>
    (<div className={`flex justify-center items-center h-screen w-screen bg-center bg-no-repeat bg-cover absolute top-0 left-0`} style={{backgroundImage: `url(${bg})`}}>
        <img src={comment}  alt="munstie is dumb"/>
    </div>);

export default Munstie;