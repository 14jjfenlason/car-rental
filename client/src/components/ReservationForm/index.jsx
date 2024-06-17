
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const styles = {
  content: {
    background: "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
    width:"100%",
    height:"100%",
   color:"white",
   },
   title: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: "10px"
   },
   info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
   },

   pick: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
   },
   drop: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
   },
   body: {
    justifyContent: "space-around"
   },
   tiler: {
    paddingLeft: "6px"
   }

}

export default function ReservationForm({ data }) {
  return (
    <>
      <CardGroup>
        <Card style={styles.content}>
          <Card.Title style={styles.title}><h3>Reservation Number:</h3><h4 style={styles.tiler}>{data._id}</h4></Card.Title>
          <Card.Body className="d-flex" style={styles.body}>
            <div className="p-3 m-3" style={styles.info}>
              <img src={data.car.image} alt="" width={400} />
              <h4>Make: {data.car.make}</h4>
              <h4>Year: {data.car.year}</h4>
              <h4>Model: {data.car.model}</h4>
              <h4>Year: {data.car.year}</h4>
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
