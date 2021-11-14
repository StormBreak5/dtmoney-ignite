import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNTModalOpen, setIsNTModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNTModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNTModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNTModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}