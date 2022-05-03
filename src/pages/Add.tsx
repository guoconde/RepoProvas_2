import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  // const { token } = useAuth();
  return (
    <>
      <Typography sx={{ margin: "0 auto 39px" }} variant="h4" component="h1">
        Adicione uma prova
      </Typography>

      <Divider sx={{ marginBottom: "35px" }} />

      <Box
        sx={{
          marginX: "auto",
          width: "700px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/app/disciplinas")}
          >
            Disciplinas
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/app/pessoas-instrutoras")}
          >
            Pessoa Instrutora
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/app/adicionar")}
          >
            Adicionar
          </Button>
        </Box>
        <Box sx={{ marginTop: "25px" }}>
          <AddNewTest />
        </Box>
      </Box>
    </>
  );
}

function AddNewTest() {
  const [age, setAge] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [teacher, setTeacher] = useState("");
  const [test, setTest] = useState("");
  const [PDF, setPDF] = useState("");

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleChangeDiscipline = (event: SelectChangeEvent) => {
    setDiscipline(event.target.value);
  };
  const handleChangeTeacher = (event: SelectChangeEvent) => {
    setTeacher(event.target.value);
  };
  const handleChangeTest = (event: ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
  };
  const handleChangePDF = (event: ChangeEvent<HTMLInputElement>) => {
    setPDF(event.target.value);
  };
  const teste = [1, 2, 3, 4, 5];

  return (
    <>
      <TextField
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
        label="Titulo da prova"
        value={test}
        onChange={handleChangeTest}
      />
      <TextField
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
        label="PDF da prova"
        value={PDF}
        onChange={handleChangePDF}
      />
      <FormControl
        fullWidth
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
      >
        <InputLabel id="categorias">Categoria</InputLabel>
        <Select
          labelId="categorias"
          id="categorias"
          value={age}
          onChange={handleChangeAge}
          autoWidth
          label="Categoria"
        >
          {teste.map((item, i): any => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
      >
        <InputLabel id="disciplina">Disciplina</InputLabel>
        <Select
          labelId="disciplina"
          id="disciplina"
          value={discipline}
          onChange={handleChangeDiscipline}
          autoWidth
          label="Disciplina"
        >
          <MenuItem value={"P1"}>P1</MenuItem>
          <MenuItem value={"P2"}>P2</MenuItem>
          <MenuItem value={"P3"}>P3</MenuItem>
          <MenuItem value={"P2ch"}>P2ch</MenuItem>
          <MenuItem value={"Outras"}>Outras</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
      >
        <InputLabel id="instrutor">Pessoa Instrutora</InputLabel>
        <Select
          labelId="instrutor"
          id="instrutor"
          value={teacher}
          onChange={handleChangeTeacher}
          autoWidth
          label="Pessoa Instrutora"
        >
          <MenuItem value={"P1"}>P1</MenuItem>
          <MenuItem value={"P2"}>P2</MenuItem>
          <MenuItem value={"P3"}>P3</MenuItem>
          <MenuItem value={"P2ch"}>P2ch</MenuItem>
          <MenuItem value={"Outras"}>Outras</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => console.log({ age, discipline, teacher, test, PDF })}
        sx={{ marginX: "auto", marginBottom: "25px", width: "100%" }}
      >
        Enviar
      </Button>
    </>
  );
}
