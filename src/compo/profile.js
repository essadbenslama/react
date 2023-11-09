
import {Card} from 'react-bootstrap';
const profile = ({userInfo})=>{
          return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userInfo.imageUrl} />
            <Card.Body>
              <Card.Title>{userInfo.name}</Card.Title>
            
              
            </Card.Body>
          </Card>
          );
        }
        
export default profile;