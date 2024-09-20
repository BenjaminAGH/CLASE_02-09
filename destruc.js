
const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instagram: '@diego',
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
};

const { nombre, apellido, direccion: {ciudad} } = usuario;

console.log(nombre, apellido, ciudad);

const { intereses: [primerInteres] } = usuario;

console.log(primerInteres);

const { contactos: { email, redesSociales: { instagram } } } = usuario;

console.log(email, instagram);

const { direccion: {calle, numero}} = usuario;
const calleUsuario = calle;
const numeroUsuario = numero;

console.log(calleUsuario, numeroUsuario);