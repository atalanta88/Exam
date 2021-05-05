/*<Form.Group controlId="formImageOne">
<Form.Label>Hotel image</Form.Label>
<Form.Control name="imageone" type="file" ref={register} />
</Form.Group>
{errors.imageone && <span>{errors.imageone.message}</span>}*/
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";

import { Button, Form, Row, Col, Container } from "react-bootstrap";

export default function MediaDropdown({ register }) {
  const [media, setMedia] = useState([]);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("/upload/files");
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form.Label>Hotel image</Form.Label>
      <Form.Group controlId="formImageOne">
        <Form.Control name="imageone" ref={register} as="select">
          {media.map((media) => {
            return <option value={media.url}>{media.url}</option>;
          })}
        </Form.Control>
      </Form.Group>
    </>
  );
}

MediaDropdown.propTypes = {
  register: PropTypes.func,
};

MediaDropdown.defaultProps = {
  register: () => {},
};
