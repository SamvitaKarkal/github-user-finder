import React from "react"
import { Form } from "semantic-ui-react"

const NavBar = ({handleSearch, handleSubmit}) => {
  return (
    <div className="search">
      <Form onSubmit={handleSubmit()}>
        <Form.Group>
          <Form.Input placeholder='Name' name='name' onChange={e => handleSearch(e)}/>
          <Form.Button content= 'Submit'/>
        </Form.Group>
      </Form>
    </div>
  )
};

export default NavBar;