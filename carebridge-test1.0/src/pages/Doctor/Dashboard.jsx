import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../assets/colorPalette";
import DPCard from "../../components/Doctor/DPCard";
import DetailswithTitleCard from "../../components/Doctor/DetailswithTitleCard";
import DoctorDetailsForm from "../../components/Doctor/DoctorDetailsForm";
import ChangePswd from "../../components/Doctor/ChangePswd";
import { doc, getDoc } from "firebase/firestore";
import { db, user } from "../../config/firebaseConfigs";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    biography: "",
    contactNumber: "",
    dob: "",
    email: "",
    experience: "",
    gender: "",
    hospitalAffiliation: "",
    officeHours: "",
    professionalQualification: "",
    specialization: "",
  });

 // Function to fetch doctor details from Firebase
const fetchDoctorDetails = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const uID = user.uid;
    try {
      console.log("UID: ", uID);
      const doctorRef = doc(db, "Doctors", uID);
      const doctorDoc = await getDoc(doctorRef);
      if (doctorDoc.exists) {
        setDoctorData(doctorDoc.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching doctor details: ", error);
    }
  } else {
    console.log("No user is signed in.");
  }
};

  // Fetch doctor details on component mount
  useEffect(() => {
    fetchDoctorDetails();
  }, []);

  return (
    <DashboardWrapper>
      <Header>Profile Information</Header>
      <ColumnWrapper>
        <div className="col1">
          <DPCard
            firstName={doctorData.firstName}
            lastName={doctorData.lastName}
            experience={doctorData.experience}
            hospitalAffiliation={doctorData.hospitalAffiliation}
            specialization={doctorData.specialization}
          />
          <DetailswithTitleCard
            title={"Biography"}
            description={doctorData.biography}
          />
          <DetailswithTitleCard
            title={"Specialization"}
            description={doctorData.specialization}
          />
        </div>
        <div className="col2">
          <DoctorDetailsForm
            firstName={doctorData.firstName}
            lastName={doctorData.lastName}
            gender={doctorData.gender}
            email={doctorData.email}
            contactNumber={doctorData.contactNumber}
            address={doctorData.address}
            dob={doctorData.dob}
            officeHours={doctorData.officeHours}
            professionalQualification={doctorData.professionalQualification}
          />
        </div>
        <div className="col3">
          <ChangePswd />
        </div>
      </ColumnWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  color: aliceblue;
  background-color: ${colors.Prim};
  align-items: end;
  padding: 10px;
  border-radius: 10px 0px 0px 0px;
`;

const DashboardWrapper = styled.div`
  top: 10%;
  height: 100%;
  padding: 0px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin: 8px;
  width: 99%;

  .col1,
  .col2,
  .col3 {
    width: 99%;
    padding: 1rem;
    background-color: ${colors.SurfContainer_low};
    border: 1px solid #ddd;
    color: white;
    border-radius: 10px;
  }

  .col1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
