import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "pages/layout/Layout";
import Dashboard from "pages/dashboard/Dashboard";
import Products from "pages/products/Products";
import Costumers from "pages/customers/Customers";
import Transactions from "pages/transactions/Transactions";
import Geography from "pages/geography/Geography";
import Overview from "pages/overview/Overview";
import Daily from "pages/daily/Daily";
import Monthly from "pages/monthly/Monthly";
import Breakdown from "pages/breakdown/Breakdown";
import Admin from "pages/admin/Admin";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace /> } />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Costumers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="geography" element={<Geography />} />
            <Route path="overview" element={<Overview />} />
            <Route path="daily" element={<Daily />} />
            <Route path="monthly" element={<Monthly />} />
            <Route path="breakdown" element={<Breakdown />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
