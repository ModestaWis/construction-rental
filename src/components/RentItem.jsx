import {Card} from "react-bootstrap";


function RentItem(props) {
    return (
        <Card style={{width: '18rem',margin: ' margin: 25px 25px 25px 25px'}}>
            <Card.Img variant="top" src={props.item.image} style={{maxHeight:'15rem'}}/>
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Text>
                    <span style={{whiteSpace: "pre-line"}}>
                        {props.item.description}
                    </span>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                 <span style={{whiteSpace: "pre-line"}}>
                     {props.item.prise}
                 </span>
            </Card.Footer>
        </Card>
    );
}


export default RentItem;

