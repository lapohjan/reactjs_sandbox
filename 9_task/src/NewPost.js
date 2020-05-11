import React from 'react';
import { Form, Button } from 'react-bootstrap'

const NewPost = () => {
    return (
             <div class="col-sm-3 col-md-6 col-lg-4">
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control as="textarea" rows="1" placeholder="Give your post a title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post</Form.Label>
                    <Form.Control as="textarea" rows="5" placeholder="Write your post here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
    </div>
    );
};

export default NewPost;