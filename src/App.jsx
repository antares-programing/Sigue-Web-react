import HomePage from './pages/HomePage';
// Eliminamos la importación de App.css para que no pise los estilos de Tailwind
// import './App.css'; 

function App() {
  // Quitamos las clases por defecto y dejamos que el body controle el fondo
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;