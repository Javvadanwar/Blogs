import React from "react";
import { Button, Form } from "react-bootstrap";
class Create extends React.Component {
  constructor(){
  super()
  this.state={
    title:"",
    des:"",
    paras:"", 




    }
  }
  render(){
    const title1 = event => {
      this.setState({ title: event.target.value });
    };
    const des1 = event => {
      this.setState({ des: event.target.value });
      
    };
    const paras1 = event => {
      this.setState({ paras: event.target.value });
    };
   
   
    const Submit = () => {
      let newT= this.state.title;
      let newD = this.state.des;
      let newP = this.state.paras;
      this.props.add({ title:newT,des:newD,paras:newP });
      this.setState({ title:"",des:"" ,paras:""  });
    };

  return (
    <div>
      <Form>
      <Form.Group onChange={title1}>
  <Form.Control size="lg" type="text" placeholder="Title" value={this.state.title} />
</Form.Group>
<Form.Group onChange={des1}>
  <Form.Control size="lg" type="text" placeholder="description" value={this.state.des}/>
</Form.Group>
<Form.Group onChange={paras1} controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write Blog Here</Form.Label>
    <Form.Control as="textarea" rows="20" cols="120" value={this.state.paras} />
  </Form.Group>
</Form>
      <Button onClick={Submit}variant="primary" type="submit">
    Submit
  </Button> 
    </div>
  );
}
}
export default Create;
