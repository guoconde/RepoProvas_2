import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  // const { token } = useAuth();
  return (
    <>
      <Typography sx={{ margin: "0 auto 35px" }} variant="h4" component="h1">
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
            variant="contained"
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
          <Button variant="outlined" onClick={() => navigate("/app/adicionar")}>
            Adicionar
          </Button>
        </Box>
        {/* <TermsAccordions categories={categories} terms={terms} /> */}
      </Box>
    </>
  );
}
