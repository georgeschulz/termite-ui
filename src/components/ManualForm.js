import idPic from '../assets/id-pic.jpeg'
import Subheader from './Subheader';
import H2 from './H2';

function ManualForm() {
    return (
        <div className="flex justify-center flex-wrap mt-10">
            <H2>How to Tell the Difference?</H2>
            <Subheader>How to visually ID the difference between termites and ants (or take a picture below!)</Subheader>
            <img src={idPic} alt="A termite and an ant" className='w-1/2' />
        </div>
    )   
}

export default ManualForm;