
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const styles = {
  content: {
    background: "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
    width:"100%",
    height:"100%",
   color:"white"
   },

   info: {
    
   }

}

export default function ReservationForm({ data }) {
  return (
    <>
      <CardGroup>
        <Card style={styles.content}>
          <Card.Title style={styles.title}>Reservation Number: {data._id}</Card.Title>
          <Card.Body className="d-flex">
            <div className="p-3 m-3" style={styles.info}>
              <img src={data.car.image} alt="" width={300} />
              <h4>Make: {data.car.make}</h4>
              <h4>Year: {data.car.year}</h4>
              <h4>Model: {data.car.model}</h4>
              <h4>Mileage: {data.car.mileage}</h4>
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
