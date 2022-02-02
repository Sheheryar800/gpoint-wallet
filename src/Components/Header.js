import React from 'react';
import {Navbar,Nav,Container,Button} from 'react-bootstrap'

function Header() {
  return (
  <>
    <Navbar expand="lg" style={{backgroundColor:'#EFF5FF'}} >
  <Container fluid >
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll" style={{justifyContent:'center'}}  >
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ display:'flex',justifyContent:'space-between',width:'65%'}}
        navbarScroll
      >
        <div  className='navItems'>
            <Nav.Link href="#action1">Send & Receive</Nav.Link>
            <Nav.Link href="#action2">Ways to pay</Nav.Link>
            <Nav.Link href="#action1">For Business</Nav.Link>
            <Nav.Link href="#action2">Rewards</Nav.Link>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
            <Button style={{backgroundColor:'transparent',color:'black',borderColor:'transparent'}}>Log in</Button>
            <Button style={{backgroundColor:'transparent',borderColor:'transparent',padding:'0.8rem 1.2rem',fontWeight:'500',color:'black',boxShadow:'rgb(0 0 0 / 10%) 6px 6px 8px -4px,-9px -8px 15px -6px rgba(255,255,255,0.67)',}}>Sign up</Button>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  );
}

export default Header;
