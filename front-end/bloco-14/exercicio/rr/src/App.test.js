import { render, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Testa tudo', () => {
  test('deve renderizar o componente App', () => {
    renderWithRouter(<App />);
  
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
  
    expect(homeTitle).toBeInTheDocument();
  
  });
  
  test('deve renderizar o componene sobre', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', {name: 'Sobre'});
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  
    const { pathname} = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading',{name: 'Você está na página Sobre'});
    expect(aboutTitle).toBeInTheDocument();
  })
  test('deve caminho que não existe', () => {
    const {history} = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');
    const notFound = screen.getByRole('heading', {name: 'Página não encontrada'})
    expect(notFound).toBeInTheDocument();
  })
})

