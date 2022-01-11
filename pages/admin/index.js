import Router from "next/router";
import { useEffect, useState } from "react";

const AllBookings = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const token = JSON.parse(window.localStorage.getItem("auth__token")) || false;
    const res = await fetch("https://bushro-academy-back.herokuapp.com/allBooking", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token,
      },
    });

    if (res.status === 400) {
      Router.push("/admin/login");
    } else if (res.status === 200) {
      const requests = await res.json();
      setData(requests.data);
    }
  }, []);

  useEffect(() => {}, [data]);
  return (
    <>
      <div>
        {data.length > 0 ? (
          <>
            <h1 className="fs-2 p-3 mb-2 bg-primary text-white">Arizalar</h1>
            {data.map(row => (
              <div key={row.booking_id} className="p-3 mb-2 bg-success text-white">
                <p className="fs-5 badge bg-primary text-wrap">Id {row.booking_id}</p>
                <p className="fs-5">
                  Arizachinig ismi:{" "}
                  <span className="badge bg-warning text-wrap">{row.booking_name}</span>
                </p>
                <p className="fs-5">
                  Telefon raqami:{" "}
                  <span className="badge bg-warning text-wrap">{row.booking_phone}</span>
                </p>
                <p className="fs-5">
                  Email addressi:{" "}
                  <span className="badge bg-warning text-wrap">
                    {row.booking_gmail ? row.booking_gmail : "Email address mavjud emas"}
                  </span>
                </p>
              </div>
            ))}
          </>
        ) : (
          <div
            className="spinner-border text-success position-absolute top-50 start-50 translate-middle"
            style={{ width: "50px", height: "50px" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default AllBookings;
