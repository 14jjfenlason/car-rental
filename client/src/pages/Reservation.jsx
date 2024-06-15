import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_RESERVATION } from "../utils/mutations";
import { GET_VEHICLES } from "../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";

const ReservationLength = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState("");
  const [carInput, setCarInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(GET_VEHICLES);
  const [createReservation, { loading: mutationLoading }] =
    useMutation(CREATE_RESERVATION);

  useEffect(() => {
    const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    setLocationInput(storedLocations[0] || "");
  }, []);

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleCarChange = (e) => {
    setCarInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !locationInput ||
      !carInput ||
      !startDate ||
      !endDate ||
      !startTime ||
      !endTime
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const { data } = await createReservation({
        variables: {
          car: carInput,
          startDate,
          endDate,
          startTime,
          endTime,
        },
      });

      console.log("Reservation created:", data);

      const newLocations = [locationInput];
      localStorage.setItem("locations", JSON.stringify(newLocations));

      setError("");
      setConfirmation(
        `Thank you! Your reservation for the location "${locationInput}" is confirmed. You can pick your car at 2725 No Where to be found Texas.`
      );
    } catch (error) {
      console.error("Error creating reservation:", error.message);
      setError(`Error creating reservation: ${error.message}`);
    }
  };

  const predefinedLocations = [
    "Austin, Texas",
    "Dallas, Texas",
    "Houston, Texas",
  ];

  return (
    <div className="background-image">
      <div className="container mt-5">
        <h2>Reservation</h2>
        <form onSubmit={handleSubmit} className="form-inline">
          {/* Location Selection */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="locationSelect">
              Location
            </label>
            <select
              className="form-control"
              id="locationSelect"
              value={locationInput}
              onChange={handleLocationChange}
            >
              <option value="">Pick-up</option>
              {predefinedLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          {/* Car Selection */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="carSelect">
              Car
            </label>
            <select
              className="form-control"
              id="carSelect"
              value={carInput}
              onChange={handleCarChange}
            >
              <option value="">Select Car</option>
              {data?.vehicles.map((vehicle) => (
                <option key={vehicle._id} value={vehicle._id}>
                  {vehicle.make} {vehicle.model}
                </option>
              ))}
            </select>
          </div>
          {/* Start Date */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="startDate">
              Pick-up date
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Pick-up date</span>
              </div>
              <input
                type="date"
                className="form-control"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* End Date */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="endDate">
              Drop-off date
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Drop-off date</span>
              </div>
              <input
                type="date"
                className="form-control"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Start Time */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="startTime">
              Pick-up time
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Pick-up time</span>
              </div>
              <input
                type="time"
                className="form-control"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
          </div>
          {/* End Time */}
          <div className="form-group mb-2 mr-2">
            <label className="sr-only" htmlFor="endTime">
              Drop-off time
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Drop-off time</span>
              </div>
              <input
                type="time"
                className="form-control"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-2"
            disabled={mutationLoading}
          >
            {mutationLoading ? "Submitting..." : "Reserve"}
          </button>
        </form>
        {queryError && (
          <p className="text-danger">
            Error loading cars: {queryError.message}
          </p>
        )}
        {error && <p className="text-danger">{error}</p>}
        {confirmation && <p className="text-success">{confirmation}</p>}
      </div>
    </div>
  );
};

export default ReservationLength;
