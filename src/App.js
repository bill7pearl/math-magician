/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import Wrapper from './components/Wrapper';
import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './components/CalcContext';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Calculator />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
