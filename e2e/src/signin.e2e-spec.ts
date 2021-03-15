import { SigninPage } from './signin.po';

describe('Testando tela Home', () => {
  let signinPage: SigninPage;
  beforeEach(() => {
    signinPage = new SigninPage();
  });

  it('deve navegar para home', () => {
    signinPage.acessarHome();
  })

});
