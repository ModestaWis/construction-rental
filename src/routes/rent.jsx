import {CardGroup,} from "react-bootstrap";
import {itemsList} from "../data/itemsList";
import RentItem from "../components/RentItem";

export default function Rent() {
    return (
        <div>
            <p></p>
            <h2> Nasz sprzęt : </h2>
            <p></p>
            <CardGroup>
                <RentItem item={itemsList[0]}/>
                <RentItem item={itemsList[1]}/>
            </CardGroup>
            <CardGroup>
                <RentItem item={itemsList[2]}/>
                <RentItem item={itemsList[3]}/>
            </CardGroup>
            <CardGroup>
                <RentItem item={itemsList[4]}/>
                <RentItem item={itemsList[5]}/>
            </CardGroup>
            <CardGroup>
                <RentItem item={itemsList[6]}/>
                <RentItem item={itemsList[7]}/>
            </CardGroup>

                <RentItem item={itemsList[8]}/>

        </div>
    );
}