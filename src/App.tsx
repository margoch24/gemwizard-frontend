import { DiamondsContextProvider } from "common/hooks/diamondsContext";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient as createQueryClient } from "common/queryClient";
import "./common/locale/i18n";
import { LocaleContextProvider } from "common/hooks/localeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./common/locale/i18n";
import { HistoryContextProvider } from "common/hooks/historyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = createQueryClient();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <LocaleContextProvider>
          <DiamondsContextProvider>
            <HistoryContextProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                theme="light"
              />
            </HistoryContextProvider>
          </DiamondsContextProvider>
        </LocaleContextProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
