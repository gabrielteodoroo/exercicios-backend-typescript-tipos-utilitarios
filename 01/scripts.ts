type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};

type UsuarioSemRg = Omit<Usuario, "rg">;
type UsuariosCamposObrigatorios = Required<UsuarioSemRg>;

const gabriel: UsuariosCamposObrigatorios = {
  nome: "gabriel",
  email: "gabriel@email.com",
  cpf: "08282504564",
  dataNacimento: "19/11/1999",
};
