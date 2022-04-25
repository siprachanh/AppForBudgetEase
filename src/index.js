import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApplicationViews } from './components/ApplicationViews';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppForBudgetEase} from './components/AppForBudgetEase';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <AppForBudgetEase />
  </Router>
);


