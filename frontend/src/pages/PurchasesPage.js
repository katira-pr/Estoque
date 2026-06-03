import React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';

function PurchasesPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Gestão de Compras</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography component="h1" variant="h4">
          Gestão de Compras
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Página de compras - a ser implementada
        </Typography>
      </Container>
    </>
  );
}

export default PurchasesPage;
