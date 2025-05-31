import {Link} from 'react-router-dom';
function HeaderComponent(){
    return(<>
        <Link to='/'>Home</Link> &nbsp;&nbsp;&nbsp;|&nbsp;
        <Link to='/signUp'>Sign Up </Link>&nbsp;&nbsp;&nbsp;|&nbsp;
        <Link to='/signIn'>Sign In</Link>
    </>)
}

export default HeaderComponent;