import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Button from './components/Button/Button'

function App() {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const cambioColorFondo = () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Primer Pre entrega" />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button color="black" label="Cambiar Color de Fondo" onClick={cambioColorFondo} />
      </div>
    </>
  )
}

export default App