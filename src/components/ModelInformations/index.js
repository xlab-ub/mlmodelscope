import React from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import ModelInformation from "../ModelInformation";
import { Container, Grid, Card } from "semantic-ui-react";

export default connect(
  {
    models: state`models.data`
  },
  function Models({ models }) {
    if (!models || models.length === 0) {
      return <div />;
    }
    const body = models.map(m => {
      return <ModelInformation key={"info-" + m.uuid} model={m} />;
    });
    return (
      <Container>
        <Grid.Row centered columns={1}>
          <Card.Group itemsPerRow={4}>{body}</Card.Group>
        </Grid.Row>
      </Container>
    );
  }
);