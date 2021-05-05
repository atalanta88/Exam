import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, CardColumns } from "react-bootstrap";
import { API_HOUSINGS } from "../../constants/api";
import HousingObject from "./HousingObject";
import Heading from "../Heading";
import Loader from "../common/Loader";
import ErrorMessage from "../common/ErrorMessage";

function HousingList() {
  const [housing, setHousingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_HOUSINGS);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setHousingList(json);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <>
      <Heading title="Home" />
      <Container>
        <Row>
          <CardColumns>
            {housing.map(function (housing) {
              const {
                id,
                name,
                adress,
                description,
                price,
                slug,
                type,
                images,
                imageone,
                imagetwo,
                imagethree,
                imagefour,
              } = housing;

              return (
                <HousingObject
                  key={id}
                  id={id}
                  name={name}
                  adress={adress}
                  description={description}
                  price={price}
                  slug={slug}
                  type={type}
                  images={images}
                  imageone={imageone}
                  imagetwo={imagetwo}
                  imagethree={imagethree}
                  imagefour={imagefour}
                />
              );
            })}
          </CardColumns>
        </Row>
      </Container>
    </>
  );
}

export default HousingList;
