import fcclogo from '../images/freecodecamp-logo.png';
 
 
 function FccLogo() {
    return (
        <div className='freecodecamp-logo-container'>
          <img
            src={fcclogo}
            className='freecodecamp-logo'
            alt='FCC logo' />
        </div>
    )
};


export default FccLogo;