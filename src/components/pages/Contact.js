import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React from 'react';
import"../../App.css"
const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60    ",
    time: '15 Oct 2023',
    title: 'Debasish Behera',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.linkedin.com/in/debasish-behera-53bb281a5/'
  },
  {
    id: 2,
    image:' https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ',
    time: '10 Sep 2023',
    title: 'Biswajit Swain',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.linkedin.com/in/biswajit-swain5500u/'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    time: '07 Nov 2023',
    title: 'Bikash Tripathy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.linkedin.com/in/bikash-tripathy-512610220/'
  }
]

function App() {
  return (

      
    <section id="blog" className="block blog-block">
        
      <Container fluid>
        <div className="title-holder">
          <h1>Contact With Our Vendor</h1>

        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">CALL NOW <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
 
  )

}

export default App;