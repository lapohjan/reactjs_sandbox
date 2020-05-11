import React from 'react';
import { useRouteMatch, Route, Switch, Link} from 'react-router-dom';
import postdata from './postdata';
import Post from './Post';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';

const Blog = () => {
    let match = useRouteMatch();
    const post = postdata;

    const blogList = post.map((post) => {
      return (
        <Container>
        <Row xs={2} md={2} lg={2} >
        <Col xs={4} md={6} lg={8}>
        <Card style={{ width: '18rem' }}>
          <div key={post.id}>
              <Card.Img variant='top' src={post.img} alt={post.title} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.desc}</Card.Text>
                <Button variant='primary'>
                  <Link to={`${match.url}/${post.title}`} style={{color: 'white'}}>Read more</Link>
                </Button>
            </Card.Body>
        </div>
        </Card>
        </Col>
        </Row>
        </Container>
      );
    });

    return (
      <div >
         <Switch>
            <Route path="/blog/:postId">
                <Post />
            </Route>
            <Route path={match.path}>{blogList}</Route>
         </Switch>
       </div>
    );
};

export default Blog;