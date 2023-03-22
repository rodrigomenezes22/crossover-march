import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
function ItemDetails() {
  const [results, setResults] = useState();
  const options = {
    method: "POST",
    url: "https://realty-in-us.p.rapidapi.com/properties/v3/list",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "2d5ef37aeemsh14a41a946a4a659p14d5e7jsn80fd59473f9b",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
    data: '{"limit":3,"offset":0,"postal_code":"90004","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}',
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setResults(response.data.data.home_search.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Container>
        <h2 className="mt-5 mb-5">Popular Properties</h2>
        <Row>
          {results &&
            results.map((home) => (
              <Col xs={12} sm={6} md={4}>
                {" "}
                <Card className="mb-4">
                  <Card.Img variant="top" src={home.primary_photo.href} />
                  <Card.Body>
                    <Card.Title className="font-weight-bold text-success text-decoration-underline">
                      <h3>{`$ ${home.list_price}`}</h3>
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {`${home.location.address.postal_code},${home.location.address.street_suffix}-${home.location.address.street_name},${home.location.address.street_number}`}
                      <br />
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      <h2>{`${home.location.address.city},${home.location.address.country}`}</h2>
                    </Card.Text>
                    <Card.Text className="font-weight-bold">
                      <Row>
                        <Col>
                          <h4>
                            <i className="fa fa-bed m-3"></i>
                            {home.description.beds}
                          </h4>
                        </Col>
                        <Col>
                          <h4>
                            <i className="fa fa-bathtub m-3"></i>
                            {home.description.baths}
                          </h4>{" "}
                        </Col>{" "}
                      </Row>
                    </Card.Text>
                    <Button variant="success rounded-pill" size="lg">
                      See Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default ItemDetails;
