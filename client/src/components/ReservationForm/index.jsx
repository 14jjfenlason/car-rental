
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default function ReservationForm({ data }) {
  console.log("reservation form", data);
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Title>Reservation Number: {data._id}</Card.Title>
          <Card.Body className="d-flex">
            <div className="p-3 m-3">
              <img src={data.car.image} alt="" width={200} />
              <h4>Make: {data.car.make}</h4>
              <h4>Model: {data.car.model}</h4>
              <h5>Mileage: {data.car.mileage}</h5>
            </div>

            <div className="p-3 m-3">
              <p>
                Start Date: {data.startDate} {data.startTime}
              </p>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
