import React from 'react';
import { FormGroup, FormControl, ControlLabel, Grid } from 'react-bootstrap';

const Letter = ({ text }) => (
  <Grid>
    <form>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Letter</ControlLabel>
        <FormControl componentClass="textarea" value={text} />
      </FormGroup>
    </form>
  </Grid>
);

export default Letter;
