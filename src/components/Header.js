import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
function Header () {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('use-info'));

  let logout = () => {
    localStorage.clear();
    navigate("/register")
  }
  return(
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            {
              localStorage.getItem('use-info')?
              <>
                <Link to='/add'>Add Product</Link>
                <Link to='/update'>Update Product</Link>
              </>
              :
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            }
          </Nav>
          {localStorage.getItem('use-info')?
            <Nav>
              <NavDropdown title={user && user.fName} className="text-center">
              <NavDropdown.Item  onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          :null
          }
      </Navbar>
    </div>
  );
}
export default Header ;