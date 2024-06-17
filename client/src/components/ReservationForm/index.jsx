
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const styles = {

}

export default function ReservationForm({ data }) {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Title style={styles.title}>Reservation Number: {data._id}</Card.Title>
          <Card.Body className="d-flex">
            <div className="p-3 m-3" style={styles.info}>
              <img src={data.car.image} alt="" width={300} />
              <h4>Make: {data.car.make}</h4>
              <h4>Model: {data.car.model}</h4>
              <h5>Mileage: {data.car.mileage}</h5>
            </div>

            <div className="p-3 m-3" style={styles.pick}>
              <h4>Pick-Up Date:</h4>
                 <h5>{data.startDate} at {data.startTime}</h5>
            </div>

            <div className="p-3 m-3" style={styles.drop}>
              <h4>Drop-off Date:</h4>
                 <h5>{data.endDate} at {data.endTime}</h5>
            </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}
