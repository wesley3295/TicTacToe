import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import { Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const Swapi = () => {
  const classes = useStyles();
  const [pointer, setPointer] = useState("https://swapi.dev/api/people");
  const [people, setPeople] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPeople = async () => {
    await fetch(pointer)
      .then((resp) => resp.json())
      .then((data) => {
        setPeople([...people, ...data.results]);
        setPointer(data.next);
      });
  };
  useEffect(() => {
    if (pointer != null) {
      fetchPeople();
    }
  }, [pointer]);
  console.log(people);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: 170 }}>Name</TableCell>
              <TableCell style={{ minWidth: 170 }}>Height</TableCell>
              <TableCell style={{ minWidth: 170 }}>Mass</TableCell>
              <TableCell style={{ minWidth: 170 }}>Born</TableCell>
              <TableCell style={{ minWidth: 170 }}>Ears</TableCell>
              <TableCell style={{ minWidth: 170 }}>Hair</TableCell>
              <TableCell style={{ minWidth: 170 }}>Skin</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.length > 81 &&
              people.map((person) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>2{person.name}</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Swapi;
